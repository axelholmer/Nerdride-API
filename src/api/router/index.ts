import { Router } from "express";
import rideRouter from "./ride.router";
import userRouter from "./user.router";

/** Variables */
export const router: Router = Router();

/** Routes */
router.use("/users", userRouter);
router.use("/rides", rideRouter);
