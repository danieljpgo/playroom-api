import express, { Router } from 'express';
import cors from 'cors';
import path from 'path';

export default (routes: Router) => {
  const app = express();

  app.use('/uploads', express.static(path.resolve(__dirname, '..', '..', '..', 'uploads')))
  app.use(cors());
  app.use(express.json());
  app.use(routes);

  // @TODO Handle errors

  return app;
}