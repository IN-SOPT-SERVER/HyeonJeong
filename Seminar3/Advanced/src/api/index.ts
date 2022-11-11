import express, { Router } from 'express';
import seriesRouter from "./seriesRouter"
const router: Router = express.Router();

router.use("/series", seriesRouter);

module.exports = router; // 모듈로 반환

