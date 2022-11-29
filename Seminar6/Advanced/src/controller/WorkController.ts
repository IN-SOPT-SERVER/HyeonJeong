import express, { Request, Response } from "express";
import workService from "../service/WorkService";
import { rm, sc } from "../constants";
import { fail, success } from "../constants/response";
import { WorkCreateDto } from "../interfaces/WorkCreateDto";

//* 작품 추가
const createWork = async (req: Request, res: Response) => {
    const { workName, genre, ageLimit } = req.body;
    const image: Express.MulterS3.File = req.file as Express.MulterS3.File;
    const { location } = image;

    if (!location || !workName) {
        return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NOT_FOUND));
    }

    const data = await workService.createWork(workName, genre, +ageLimit, location);

    if (!data) {
        return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.CREATE_WORK_FAIL));
    }

    return res.status(sc.CREATED).send(success(sc.CREATED, rm.CREATE_WORK_SUCCESS, data));
}

//* 작품 검색하기
const getWorkByName = async (req: Request, res: Response) => {
    const { workName, option } = req.query;

    if (!workName) {
        return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NOT_FOUND));
    }

    const data = await workService.getWorkByName(workName as string, option as string);

    if (!workName) {
        return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.GET_WORK_BY_NAME_FAIL));
    }
    return res.status(sc.OK).send(success(sc.OK, rm.GET_WORK_BY_NAME_SUCCESS, data))
}

//* 작품 전체 조회 (페이징)
const getWork = async (req: Request, res: Response) => {
    const { page, limit } = req.query;

    const data = await workService.getWork(Number(page), Number(limit));

    if (!data) {
        return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.GET_WORK_FAIL));
    }
    return res.status(sc.OK).send(success(sc.OK, rm.GET_WORK_SUCCESS, data));
}

const workController = {
    createWork,
    getWorkByName,
    getWork,
}

export default workController;