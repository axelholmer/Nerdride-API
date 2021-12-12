import { Router, Request, Response } from "express";
import * as rideController from "../controller/ride";
import { CreateRideDTO, FilterRidesDTO, UpdateRideDTO } from "../dto/ride.dto";

const rideRouter = Router();
// userRouter.get(':/slug', () => {
//   // get ingredient
// })
// userRouter.put('/:id', () => {
//   // update ingredient
// })
// userRouter.delete('/:id', () => {
//   // delete ingredient
// })
// userRouter.post('/', () => {
//   // create ingredient
// })

rideRouter.get("/", async (req: Request, res: Response) => {
  try {
    const filters: FilterRidesDTO = req.query;
    const results = await rideController.getAll(filters);
    return res.status(200).send(results);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(503).json({ error: error.toString() });
    }
  }
});

rideRouter.get(":/ride_id", async (req: Request, res: Response) => {
  const ride_id = String(req.params.ride_id);

  try {
    const results = await rideController.getById(ride_id);
    return res.status(200).send(results);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(503).json({ error: error.toString() });
    }
  }
});

rideRouter.get(":/user_id", async (req: Request, res: Response) => {
  const user_id = String(req.params.user_id);

  try {
    const results = await rideController.getById(user_id);
    return res.status(200).send(results);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(503).json({ error: error.toString() });
    }
  }
});

export default rideRouter;

// /** Package imports */
// import { Router } from 'express';
// import UserController from '../controller/user';

// /** Variables */
// export const userRouter: Router = Router({ mergeParams: true });

// /** Routes */
// userRouter.get('/users', UserController.getAllUsers);
// // jokeRouter.post('/', JokeController.createJoke);
// // jokeRouter.get('/:jokeId', JokeController.getSingleJoke);
// // jokeRouter.delete('/:jokeId', JokeController.deleteJoke);
// // jokeRouter.patch('/:jokeId', JokeController.patchJoke);
// // jokeRouter.get('/filterFunnyCounter/:funnyCounterValue', JokeController.getFilteredJoke);
// // jokeRouter.get('/filterCategory/:categoryToFilter', JokeController.getFilteredCategory);
// // jokeRouter.get('/exportJoke/csv', JokeController.getCsv);
// // jokeRouter.get('/generatejokes/chucknorris', JokeController.getChuckNorrisJoke);
