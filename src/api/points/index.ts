import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../../services/multer/index';
import { index, show, create } from './controller';

const router = Router();
const upload = multer(multerConfig);

router.get('/', index);
router.get('/:id', show);
router.post('/', upload.single('image'), create);

export default router;