import express, { Router } from 'express';
import { workController } from '../controller';
import { upload } from "../middlwares";

const router: Router = express.Router();

//* 작품 추가 POST /work
router.post('/', upload.single("file"), workController.createWork);

//* 작품 검색하기 (옵션) GET /work/search?workName=&option=
router.get('/search', workController.getWorkByName);

//* 작품 전체 조회 페이징 GET /work
router.get('/all', workController.getWork);

export default router;