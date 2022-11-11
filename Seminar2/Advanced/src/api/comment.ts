
import express, { Request, Response, Router } from "express";
import Comment from "../interface/Comment";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();
const commentData: Comment = {
  name: "박현정",
  age: 24,
  description: "너무 신나고 재미나는 서버 세미나 ^-^"
}

router.get("/", (req: Request, res: Response) => {
  return res.status(400).json({
    status: 400,
    message: "댓글 조회 실패",
    data: commentData
  });
});

module.exports = router;