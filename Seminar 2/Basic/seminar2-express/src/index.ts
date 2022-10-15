import express, { NextFunction, Request, Response } from "express";

const app = express(); // express 객체 받아옴
const PORT = 3000; // 사용할 port를 3000번으로 설정 (꼭 3000안해도 됨)

app.use(express.json()); // express 에서 request body를 json 으로 받아오겠다.


app.use("/api", require("./api")); // use -> 모든 요청
// localhost:8000/api -> api 폴더 (index.ts까지 찾음 ./api가 api폴더 내에서 index.ts에서 인식)
// localhost:8000/api/user -> user.ts (index.ts에서 user을 찾음)

// 최상단 index로 localhost:3000으로 이동하면 가장 먼저 화면에서 보여짐
//* HTTP method - GET
app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("박현정 Server part!!!");
});

app.listen(PORT, () => {
    console.log(`
        #############################################
            🛡️ Server listening on port: ${PORT} 🛡️
        #############################################
    `);
}); // 8000 번 포트에서 서버를 실행하겠다!