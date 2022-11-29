import { Request, Response } from "express";
import { fail, success } from "../constants/response";
import { imageService } from "../service";
import { rm, sc } from "../constants";


//* 이미지 업로드 API 
const uploadImage = async (req: Request, res: Response) => {
    const image: Express.MulterS3.File = req.file as Express.MulterS3.File; //multer을 통해 내포하는거 꺼낼 수 있음
    const { location } = image; //이미지 위치 (이미지 객체 url)


    if (!location) {
        return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NO_IMAGE));
    }
    const data = await imageService.uploadImage(location); //업로드 파일 보내줌

    if (!data) {
        return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.CREATE_IMAGE_FAIL));
    }
    return res.status(sc.CREATED).send(success(sc.CREATED, rm.CREATE_IMAGE_SUCCESS, data));
};

const imageController = {
    uploadImage,
};

export default imageController;
