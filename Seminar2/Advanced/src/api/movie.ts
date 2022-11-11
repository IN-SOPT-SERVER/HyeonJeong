
import express, { Request, Response, Router } from "express";
import Movie from "../interface/Movie";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();
const movieData: Movie = {
  title: "공조2: 인터네셔날",
  supervision: "이석훈",
  heroine: "현빈, 유해진, 다니엘헤니"
}
router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "영화 조회 성공",
    data: movieData,
  });
});

module.exports = router;