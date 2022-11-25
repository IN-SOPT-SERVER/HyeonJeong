import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { sc } from "../constants";

const prisma = new PrismaClient();

//* 시리즈 조회
const getSeries = async (episodeNumber: number, workId: number) => {
    const data = await prisma.work.findUnique({
        where: {
            id: workId,
        },
        include: {
            Episode: {
                where: {
                    EpisodeNumber: episodeNumber,
                }
            }
        }
    })
    return data;
};

//* 찜한 콘텐츠 추가
const postLike = async (workId: number, userId: number) => {
    const data = await prisma.likeWork.create({
        data: {
            workId: workId,
            userId: userId,
        }
    })
    return data;
}


//* 찜한 콘텐츠 제거
const deleteMyList = async (workId: number, userId: number) => {
    const data = await prisma.likeWork.findFirst({
        where: {
            userId,
            workId,
        },
    });

    if (!data) {
        return data;
    }

    const deleteData = await prisma.likeWork.delete({
        where: {
            id: data.id,
        }
    });
    return deleteData;
}

//* 찜한 컨텐츠 조회
const getLike = async (userId: number) => {
    const data = await prisma.likeWork.findMany({
        where: {
            userId,
        }
    });

    return data;
}


const seriesService = {
    getSeries, postLike, deleteMyList, getLike
}

export default seriesService;