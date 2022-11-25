import express, { Router } from 'express';
import { seriesController } from '../controller';

const router: Router = express.Router();

//* 시리즈 조회 GET /series?episodeNumber=1&workId=1
router.get('/', seriesController.getSeries);

//* 찜한 콘텐츠 추가 POST /series/:userId/:workId/:episodeNumber
router.post('/:userId/:workId/:episodeId', seriesController.postLike);

//* 찜한 콘텐츠 취소 DELETE /series/:userId/:workId/:episodeNumber
router.delete('/:userId/:workId/:episodeId', seriesController.deleteMyList);

export default router;