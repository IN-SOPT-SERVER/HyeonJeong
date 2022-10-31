import express, { Request, Response } from "express";
import seriesService from "../service/SeriesService";

const getSeries = async (req: Request, res: Response) => {
    const { seriesId } = req.params;

    const data = await seriesService.getSeries(seriesId);

    if (!data) {
        return res.status(404).json({
            status: 404,
            message: "Not Found"
        });
    }

    return res.status(200).json({
        status: 200,
        message: "series 정보 조회",
        data
    });
};

const postEvaluate = async (req: Request, res: Response) => {
    const { seriesId } = req.params;
    const { evalNum } = req.body;

    const data = await seriesService.postEvaluate(seriesId, evalNum);

    if (!data) {
        return res.status(404).json({
            status: 404,
            message: "Not Found"
        });
    }

    return res.status(200).json({
        status: 200,
        message: `successful evaluation : ${data.userInfo.evalNum}`
    });
}

const postMyList = async (req: Request, res: Response) => {
    const { seriesId } = req.params;

    const data = await seriesService.postMyList(seriesId);

    if (!data) {
        return res.status(404).json({
            status: 404,
            message: "Not Found"
        });
    }

    return res.status(200).json({
        status: 200,
        message: "북마크에 저장 성공"
    });

}

const deleteMyList = async (req: Request, res: Response) => {
    const { seriesId } = req.params;

    const data = await seriesService.deleteMyList(seriesId);

    if (!data) {
        return res.status(404).json({
            status: 404,
            message: "Not Found"
        });
    }

    return res.status(200).json({
        status: 200,
        message: "북마크에서 삭제"
    });

}

export default { getSeries, postEvaluate, postMyList, deleteMyList };