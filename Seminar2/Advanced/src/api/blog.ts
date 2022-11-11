
import express, { Request, Response, Router } from "express";
import Blog from "../interface/Blog";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

const blogData: Blog = {
  title: "Sopt Server Assignment",
  description: "Advanced Assignment",
}

router.get("/", (req: Request, res: Response) => {
  return res.status(404).json({
    status: 404,
    message: "블로그 리소스 찾을 수 없음 Not Found!",
    data: blogData,
  });
});

module.exports = router;