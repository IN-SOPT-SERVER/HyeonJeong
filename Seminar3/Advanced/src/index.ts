import express, { NextFunction, Request, Response } from 'express';
const app = express();
const PORT = 3000;

app.use(express.json()); // express에서 request body를 json으로 받아오는 것

app.use('/api', require("./api")); // use -> 모든 요청

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("수리남 api 가져오기");
});

app.listen(PORT, () => {
    console.log(`
          #############################################
              🛡️ Server listening on port: ${PORT} 🛡️
          #############################################
      `);
}); // 3000번 포트에서 서버를 실행