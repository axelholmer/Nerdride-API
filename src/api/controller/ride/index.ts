import * as service from '../../../db/services/rideService'
import { CreateRideDTO, UpdateRideDTO, FilterRidesDTO } from '../../dto/ride.dto'
import { Ride } from '../../interfaces'
import * as mapper from './mapper'

// export const create = async(payload: CreateIngredientDTO): Promise<Ingredient> => {
//     return mapper.toIngredient(await service.create(payload))
// }
// export const update = async (id: number, payload: UpdateIngredientDTO): Promise<Ingredient> => {
//     return mapper.toIngredient(await service.update(id, payload))
// }

export const getById = async (ride_id: string): Promise<Ride> => {
    return mapper.toRide(await service.getById(ride_id))
}

// export const deleteById = async(id: number): Promise<Boolean> => {
//     const isDeleted = await service.deleteById(id)
//     return isDeleted
// }
export const getAll = async(filters: FilterRidesDTO): Promise<Ride[]> => {
    return (await service.getAll(filters)).map(mapper.toRide)
}