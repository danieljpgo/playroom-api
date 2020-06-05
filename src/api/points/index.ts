import { Router } from 'express';
import { index, show, create } from './controller';

const router = Router();

router.get('/', index)
router.get('/:id', show)
router.post('/', create)

export default router;