import * as service from "../../../db/services/userService";
import {
  CreateUserDTO,
  UpdateUserDTO,
  FilterUsersDTO,
} from "../../dto/user.dto";
import { User } from "../../interfaces";
import * as mapper from "./mapper";

// export const create = async(payload: CreateIngredientDTO): Promise<Ingredient> => {
//     return mapper.toIngredient(await service.create(payload))
// }
// export const update = async (id: number, payload: UpdateIngredientDTO): Promise<Ingredient> => {
//     return mapper.toIngredient(await service.update(id, payload))
// }
// export const getById = async (id: number): Promise<Ingredient> => {
//     return mapper.toIngredient(await service.getById(id))
// }controller
// export const deleteById = async(id: number): Promise<Boolean> => {
//     const isDeleted = await service.deleteById(id)
//     return isDeleted
// }
export const getAll = async (filters: FilterUsersDTO): Promise<User[]> => {
  return (await service.getAll(filters)).map(mapper.toUser);
};

export const getRides = async (user_id: string): Promise<any> => {
  const array = await service.getRides(user_id);
  console.log(array)
  return JSON.stringify(array);
  // here array with fixed ride data
  // return mapper.toUser(await service.getById(id))
};
