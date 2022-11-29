import { PrismaClient } from "@prisma/client";
import { sc } from "../constants";
import { WorkCreateDto } from "../interfaces/WorkCreateDto";

const prisma = new PrismaClient();

const createWork = async (workName: string, genre: string, ageLimit: number, location: string) => {
    const data = await prisma.work.create({
        data: {
            workName: workName,
            genre: genre,
            ageLimit: ageLimit,
            image: location,
        }
    });

    return data;
}

const getWorkByName = async (workName: string, option: string) => {
    if (option === "asc") {
        const data = await prisma.work.findMany({
            where: {
                workName: {
                    contains: workName,
                },
            },
            orderBy: {
                createdAt: "asc",
            }
        })
        return data;
    }

    const data = await prisma.work.findMany({
        where: {
            workName: {
                contains: workName,
            },
        },
        orderBy: {
            createdAt: "desc",
        }
    });
    return data;
}

const getWork = async (page: number, limit: number) => {
    const data = await prisma.work.findMany({
        skip: (page - 1) * limit,
        take: limit,
    });
    return data;

}

const workService = {
    createWork,
    getWorkByName,
    getWork,
}

export default workService;