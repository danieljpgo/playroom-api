import knex from '../../database/connection';
import { Response, Request } from 'express';
import { Item } from '../../models/item';
import config from '../../config'

const { port, adress } = config

export const index = async (request: Request, response: Response) => {
  const items: Item[] = await knex('items').select('*');

  const serializedItems = items.map(item => ({
    id: item.id,
    title: item.title,
    image_url: `${adress}${port}/uploads/${item.image}`
  }));

  return response.json(serializedItems);
}
