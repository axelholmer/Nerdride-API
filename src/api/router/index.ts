/** Package imports */
import { Router } from "express";
import rideRouter from "./ride.router";
import userRouter from "./user.router";
// import { logTime } from '../module/logger';

/** Variables */
export const router: Router = Router();

/** Routes */
// globalRouter.use('/joke', logTime, jokeRouter); //With logger

router.use("/user", userRouter);
router.use("/ride", rideRouter);
