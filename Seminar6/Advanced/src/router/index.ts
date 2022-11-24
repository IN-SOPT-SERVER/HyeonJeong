import { Router } from "express";
import userRouter from "./userRouter";
import seriesRouter from "./seriesRouter"

const router: Router = Router();

router.use("/user", userRouter);
router.use("/series", seriesRouter);

export default router;
