import { series } from "../model/data";
import { PrismaClient } from "@prisma/client";
import { UserCreateDTO } from "../interfaces/UserCreateDTO";
import bcrypt from "bcryptjs";
import { UserSignInDTO } from "../interfaces/UserSignInDTO";
import { sc } from "../constants";

const prisma = new PrismaClient();

const getSeries = async (seriesId: string) => {
    return series[seriesId]
};

const postEvaluate = async (seriesId: string, evalNum: number) => {
    series[seriesId].userInfo.evalNum = evalNum; //평가번호 저장 (0,1,2)
    return series[seriesId];
}

const postMyList = async (seriesId: string) => {
    series[seriesId].userInfo.isBookMark = true;
    return series[seriesId];
}

const deleteMyList = async (seriesId: string) => {
    series[seriesId].userInfo.isBookMark = false;
    return series[seriesId];
}


export default { getSeries, postEvaluate, postMyList, deleteMyList };