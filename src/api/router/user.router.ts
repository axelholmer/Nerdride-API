import { Router, Request, Response } from "express";
import * as userController from "../controller/user";
import { CreateUserDTO, FilterUsersDTO, UpdateUserDTO } from "../dto/user.dto";

const userRouter = Router();
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

userRouter.get('/rides/:user_id', async (req: Request, res: Response) => {
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
userRouter.get("/", async (req: Request, res: Response) => {
  console.log("blabla")
  try {
    const filters: FilterUsersDTO = req.query;
    const results = await userController.getAll(filters);
    return res.status(200).send(results);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(503).json({ error: error.toString() });
    }
  }
});







export default userRouter;

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
