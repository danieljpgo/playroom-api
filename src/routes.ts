import express from 'express';
import PointController from './api/points/controller';
import ItemsController from './api/items/controller';

const routes = express.Router();
const pointsController = new PointController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show);

export default routes;