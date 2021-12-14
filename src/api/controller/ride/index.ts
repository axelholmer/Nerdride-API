import * as service from '../../../db/services/rideService'
import { Ride } from '../../interfaces'
import * as mapper from './mapper'

export const getById = async (ride_id: string): Promise<Ride[]> => {
    return (await service.getById(ride_id)).map(mapper.toRide)
}
