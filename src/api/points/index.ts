import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';
import multer from 'multer';
import multerConfig from '../../services/multer/index';
import { index, show, create } from './controller';

const router = Router();
const upload = multer(multerConfig);

router.get('/', index);
router.get('/:id', show);
router.post('/',
  upload.single('image'), // @TODO validar a image
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.number().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      state: Joi.string().required().max(2),
      items: Joi.string().required(), // @TODO validate number with regex
    })
  }, { abortEarly: false }), // @TODO move to model file
  create
);

export default router;