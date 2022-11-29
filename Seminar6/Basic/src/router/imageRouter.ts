import { Router } from "express";
import { imageController } from "../controller";
import { upload } from "../middlwares";

const router: Router = Router();

// 이 미들웨어에서는 image로 들어오는 필드에 들어와서 빌려간다, s3 버킷내에 이미지로 저장
// s3에 있는 객체 url multer에게 받는다.
router.post('/', upload.single("file"), imageController.uploadImage); //필드내에 파일 

export default router;