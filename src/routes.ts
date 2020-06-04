import express from 'express';
import knex from './database/connection';
import { Item } from './models/item';


const routes = express.Router();

const port = '3333'
const adress = `http://localhost:${port}`

routes.get('/items', async (request, response) => {
  const items: Item[] = await knex('items').select('*');

  const serializedItems = items.map(item => ({
    id: item.id,
    title: item.title,
    image_url: `${adress}/uploads/${item.image}`
  }));

  return response.json(serializedItems);
});

export default routes;