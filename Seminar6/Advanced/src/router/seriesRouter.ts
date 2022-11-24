import express, { Router } from 'express';
import { seriesController } from '../controller';

const router: Router = express.Router();

router.get('/:seriesId', seriesController.getSeries);
router.post('/isEvaluate/:seriesId', seriesController.postEvaluate);
router.post('/toMyList/:seriesId', seriesController.postMyList);
router.delete('/notMyList/:seriesId', seriesController.deleteMyList);

export default router;