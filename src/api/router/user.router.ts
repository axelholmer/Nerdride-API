import { Router, Request, Response } from "express";
import * as userController from "../controller/user";

const userRouter = Router();

  /**
   *   Get method to read the rides of a particular user from DB
   * 
   *  @returns Status 200 and results if succesfull 
   *  @returns Status 503 and error if unsuccesfull 
   */
userRouter.get('/:user_id/rides', async (req: Request, res: Response) => {
  const user_id = String(req.params.user_id);
  try {
    const results = await userController.getRides(user_id);
    return res.status(200).send(results);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(503).json({ error: error.toString() });
    }
  }
});

  /**
   *   Get method to read the stats of a particular user
   * 
   *  @returns Status 200 and results if succesfull 
   *  @returns Status 503 and error if unsuccesfull 
   */
userRouter.get('/:user_id/stats', async (req: Request, res: Response) => { 
  const user_id = String(req.params.user_id);
  try {
    const results = await userController.getStats(user_id);
    return res.status(200).send(results);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(503).json({ error: error.toString() });
    }
  }
});

 /**
   *   Get method to read the monthly stats of a particular user
   * 
   *  @returns Status 200 and results if succesfull 
   *  @returns Status 503 and error if unsuccesfull 
   */
userRouter.get('/:user_id/stats/monthly', async (req: Request, res: Response) => {
  const user_id = String(req.params.user_id);
  try {
    const results = await userController.getStatsMonthly(user_id);
    return res.status(200).send(results);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(503).json({ error: error.toString() });
    }
  }
});

export default userRouter;