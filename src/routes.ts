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

routes.post('/points', async (request, response) => {
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

  console.log(request.body)

  const ids = await knex('points').insert({
    image: 'place holder',
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    state,
  });

  const pointItems = items.map((item_id: number) => (
    {
      item_id,
      point_id: ids[0],
    }
  ))

  await knex('point_items').insert(pointItems);

  return response.json({ sucess: true })
});

export default routes;