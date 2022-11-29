import { ImageCreateResponseDto } from './../interfaces/image/ImageCreateResponseDto';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//* 이미지 업로드
// 변수 올려두면 return 타입 알 수 있음
const uploadImage = async (location: string): Promise<ImageCreateResponseDto> => {
    const data = await prisma.image.create({
        data: {
            image: location,
        }
    })
    const result: ImageCreateResponseDto = {
        id: data.id,
        image: data.image as string,
    };
    return result;
};

const imageService = {
    uploadImage,
};

export default imageService;