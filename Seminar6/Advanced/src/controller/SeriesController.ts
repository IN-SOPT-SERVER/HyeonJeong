import express, { Request, Response } from "express";
import seriesService from "../service/SeriesService";
import statuscode from "../constants/statusCode";
import message from "../constants/responseMessage";

//* 시리즈 조회
const getSeries = async (req: Request, res: Response) => {
    const episodeNumber = req.query.episodeNumber;
    const workId = req.query.workId;

    try {
        if (!episodeNumber || !workId) {
            return res.status(statuscode.BAD_REQUEST).json({ status: statuscode.BAD_REQUEST, message: message.NOT_FOUND });
        }
        const data = await seriesService.getSeries(+episodeNumber, +workId);

        if (!data) {
            return res.status(statuscode.NOT_FOUND).json({
                status: statuscode.NOT_FOUND,
                message: message.NOT_FOUND
            });
        }

        return res.status(statuscode.OK).json({
            status: statuscode.OK,
            message: message.GET_SERIES_SUCCESS,
            data
        });

    } catch (err) {
        return res.status(statuscode.INTERNAL_SERVER_ERROR).json({ status: statuscode.INTERNAL_SERVER_ERROR, message: message.INTERNAL_SERVER_ERROR });
    }

};

//* 찜한 콘텐츠 추가
const postLike = async (req: Request, res: Response) => {
    const { userId, workId, episodeId } = req.params;

    const data = await seriesService.postLike(+workId, +userId);

    if (!data) {
        return res.status(statuscode.NOT_FOUND).json({
            status: statuscode.NOT_FOUND,
            message: message.NOT_FOUND
        });
    }

    return res.status(statuscode.OK).json({
        status: statuscode.OK,
        message: `successful like : ${data.workId}`
    });
}

//* 찜한 콘텐츠 취소
const deleteMyList = async (req: Request, res: Response) => {
    console.log("d[d")
    const { userId, workId, episodeId } = req.params;

    const data = await seriesService.deleteMyList(+workId, +userId);

    if (!data) {
        return res.status(statuscode.NOT_FOUND).json({
            status: statuscode.NOT_FOUND,
            message: "message.NOT_FOUND"
        });
    }

    return res.status(statuscode.OK).json({
        status: statuscode.OK,
        message: message.DELETE_LIKE_SUCCESS
    });

}

//* 찜한 컨텐츠 조회
const getLike = async (req: Request, res: Response) => {
    const { userId } = req.params;

    const data = await seriesService.getLike(+userId);

    if (!data) {
        return res.status(statuscode.NOT_FOUND).json({
            status: statuscode.NOT_FOUND,
            message: "message.NOT_FOUND"
        });
    }
    return res.status(statuscode.OK).json({
        status: statuscode.OK,
        message: message.GET_LIKE_SUCCESS,
        data
    });
}

export default { getSeries, postLike, deleteMyList, getLike };