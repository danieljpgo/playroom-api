import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Externos', image: 'kite.svg' },
    { title: 'Educacionais', image: 'mathematics.svg' },
    { title: 'Esportivo', image: 'ball.svg' },
    { title: 'Lúdicos', image: 'kid-and-baby.svg' },
    { title: 'Musicais', image: 'drum.svg' },
    { title: 'Infantis', image: 'baby.svg' },
  ]);
}