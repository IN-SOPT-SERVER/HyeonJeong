import { Router } from "express";
import userRouter from "./userRouter";
import seriesRouter from "./seriesRouter";
import likeRouter from "./likeRouter";
import workRouter from "./workRouter";

const router: Router = Router();

router.use("/user", userRouter);
router.use("/series", seriesRouter);
router.use("/mypage", likeRouter);
router.use("/work", workRouter);

export default router;
