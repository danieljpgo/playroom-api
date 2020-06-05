import knex from '../../database/connection';
import { Response, Request } from 'express';

class Points {

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const point = await knex('points').where('id', id).first();

    if (!point) {
      return response.status(400).json({ message: 'Point not found' });
    }

    const items = await knex('items')
      .join('point_items', 'items.id', '=', 'point_items.item_id')
      .where('point_items.point_id', id)
      .select('items.title');

    return response.json({ point, items });
  }

  async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      state,
      items
    } = request.body;

    const trx = await knex.transaction();

    const point = {
      image: 'place holder',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      state,
    }

    const insertedId = await trx('points').insert(point);

    const point_id = insertedId[0]

    const pointItems = items.map((item_id: number) => (
      {
        item_id,
        point_id,
      }
    ))

    await trx('point_items').insert(pointItems);

    return response.json({
      id: point_id,
      ...point,
    })
  }
}

export default Points;