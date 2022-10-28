import express, { Request, Response } from "express";
import seriesService from "../service/seriesService";

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
export default { getSeries };