import knex from '../../database/connection';
import { Response, Request } from 'express';
import Point from '../../models/point';
import config from '../../config'

const { port, adress } = config

export const index = async (request: Request, response: Response) => {
  const { city, state, items } = request.query;

  const parsedItems =
    String(items)
      .split(',')
      .map(item => Number(item.trim()));

  const points = await
    knex('points')
      .join('point_items', 'points.id', '=', 'point_items.point_id')
      .whereIn('point_items.item_id', parsedItems)
      .where('city', String(city))
      .where('state', String(state))
      .distinct()
      .select('points.*');

  const serializedPoints = points.map(points => ({
    ...points,
    image_url: `${adress}${port}/uploads/points/${points.image}`
  }))

  return response.json(serializedPoints);
}

export const show = async (request: Request, response: Response) => {
  const { id } = request.params;

  const point = await
    knex('points')
      .where('id', id)
      .first();

  if (!point) {
    return response.status(400).json({ message: 'Point not found' });
  }

  const items = await
    knex('items')
      .join('point_items', 'items.id', '=', 'point_items.item_id')
      .where('point_items.point_id', id)
      .select('items.title');

  const serializedPoint = {
    ...point,
    image_url: `${adress}${port}/uploads/points/${point.image}`
  }

  return response.json({ point: serializedPoint, items });
}

export const create = async (request: Request, response: Response) => {
  const {
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    state,
    items,
  } = request.body;

  const point: Point = {
    image: request.file.filename,
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    state,
  }

  const trx = await knex.transaction();

  const pointInsertedId = await trx('points').insert(point);

  const point_id = pointInsertedId[0];
  const pointItems = items
    .split(',')
    .map((item: string) => Number(item.trim()))
    .map((item_id: number) => ({ item_id, point_id }));

  try {
    await trx('point_items').insert(pointItems);
    await trx.commit();
  } catch (error) {
    await trx.rollback();
    return response.status(400).json({
      message: 'Failed to insert into the poin_items table, check if the items entered are valid.'
    })
  }

  return response.json({ id: point_id, ...point })
}