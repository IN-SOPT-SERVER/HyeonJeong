import { Router } from "express";
import userRouter from "./userRouter";
import seriesRouter from "./seriesRouter"
import likeRouter from "./likeRouter"

const router: Router = Router();

router.use("/user", userRouter);
router.use("/series", seriesRouter);
router.use("/mypage", likeRouter);

export default router;
