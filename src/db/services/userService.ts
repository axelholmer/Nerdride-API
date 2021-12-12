import * as userDal from '../dal/user'
import { GetAllUsersFilters } from "../dal/types"
import { UserOuput } from "../models/User"

// export const create = (payload: IngredientInput): Promise<IngredientOuput> => {
//     return ingredientDal.create(payload)
// }
// export const update = (id: number, payload: Partial<IngredientInput>): Promise<IngredientOuput> => {
//     return ingredientDal.update(id, payload)
// }
// export const getById = (id: number): Promise<IngredientOuput> => {
//     return ingredientDal.getById(id)
// }
// export const deleteById = (id: number): Promise<boolean> => {
//     return ingredientDal.deleteById(id)
// }
export const getAll = (filters: GetAllUsersFilters): Promise<UserOuput[]> => {
    return userDal.getAll(filters)
}

export const getRides = (user_id: string): Promise<any> => {
    return userDal.getRides(user_id)
}