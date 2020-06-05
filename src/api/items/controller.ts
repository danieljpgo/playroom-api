import knex from '../../database/connection';
import { Response, Request } from 'express';
import { Item } from '../../models/item';

const port = '3333'
const adress = `http://localhost:${port}`


class Items {
  async index(request: Request, response: Response) {
    const items: Item[] = await knex('items').select('*');

    const serializedItems = items.map(item => ({
      id: item.id,
      title: item.title,
      image_url: `${adress}/uploads/${item.image}`
    }));

    return response.json(serializedItems);
  }
}

export default Items;