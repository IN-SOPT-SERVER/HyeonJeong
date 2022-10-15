
import express, { Request, Response, Router } from "express";
import User from "../interface/User";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();
const userData: User = {
  name: "박현정",
  mbti: "ESFJ",
  age: 24,
  soul_food: "연어, 육회, 회, 빵",
}
router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "유저 조회 성공",
    data: userData,
  });
});

module.exports = router;