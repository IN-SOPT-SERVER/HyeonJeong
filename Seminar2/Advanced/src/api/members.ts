import express, { Request, Response, Router } from "express";
import Member from "../interface/Member";

const router: Router = express.Router();

const members: Member[] = [
    {
        name: "권세훈",
        group: "ob",
    },
    {
        name: "박현정",
        group: "yb",
    },
    {
        name: "김동재",
        group: "ob",
    },
    {
        name: "김다현",
        group: "yb",
    },
    {
        name: "현세빈",
        group: "ob",
    },
    {
        name: "이종현",
        group: "ob",
    },
]

router.get("/", (req: Request, res: Response) => {
    return res.status(500).json({
        status: 500,
        message: "서버 내부 오류",
        members: members,
    });
});

module.exports = router;