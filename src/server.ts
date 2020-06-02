import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Teste');

  response.json([
    'Josiane',
    'Daniel'
  ]);
});

app.listen(3333);