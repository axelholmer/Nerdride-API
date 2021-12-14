import { Router, Request, Response } from "express";
import * as rideController from "../controller/ride";

const rideRouter = Router();

  /**
   *   Get method to read raw data of a particular ride from DB
   * 
   *  @returns Status 200 and results if succesfull 
   *  @returns Status 503 and error if unsuccesfull 
   */
rideRouter.get("/:ride_id", async (req: Request, res: Response) => {
  const ride_id = String(req.params.ride_id);
console.log("rides")
  try {
    const results = await rideController.getById(ride_id);
    return res.status(200).send(results);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(503).json({ error: error.toString() });
    }
  }
});

export default rideRouter;

