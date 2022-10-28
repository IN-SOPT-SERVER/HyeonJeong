import express, { Router } from 'express';
import { seriesController } from '../controller';

const router: Router = express.Router();

router.get('/:seriesId', seriesController.getSeries);
//router.post('/isEvaluate/:seriesId', require('./index'));
//router.post('/toMyList/:seriesId', require('./index'));
//router.delete('/notMyList/:seriesId', require('./index'));

export default router;