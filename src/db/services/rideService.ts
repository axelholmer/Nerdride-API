import * as rideDal from '../dal/ride'
import { GetAllRidesFilters } from "../dal/types"
import { RideOutput } from '../models/Ride'

// export const create = (payload: IngredientInput): Promise<IngredientOuput> => {
//     return ingredientDal.create(payload)
// }
// export const update = (id: number, payload: Partial<IngredientInput>): Promise<IngredientOuput> => {
//     return ingredientDal.update(id, payload)
// }
export const getById = (user_id: string): Promise<RideOutput> => {
    return rideDal.getById(user_id)
}
// export const deleteById = (id: number): Promise<boolean> => {
//     return ingredientDal.deleteById(id)
// }
export const getAll = (filters: GetAllRidesFilters): Promise<RideOutput[]> => {
    return rideDal.getAll(filters)
}