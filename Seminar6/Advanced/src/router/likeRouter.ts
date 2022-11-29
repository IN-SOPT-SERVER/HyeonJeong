import express, { Router } from 'express';
import { seriesController } from '../controller';

const router: Router = express.Router();

//* 내가 찜한 콘텐츠 조회
router.get('/like/:userId', seriesController.getLike);

export default router;