import express from './services/express';
import api from './api';
import config from './config';
import { errors } from 'celebrate';

const { port } = config;

const app = express(api);

app.use(errors());

app.listen(port);