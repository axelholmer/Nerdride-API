import { Optional } from "sequelize/types"

export type CreateRideDTO = {
    ride_id: string;
    user_id: string;
    date: number;
    speed?: number;
    voltage?: number;
    pwm?: number;
    current?: number;
    power?: number;
    battery_level?: number;
    total_mileage?: number;
    temperature?: number;
}

export type UpdateRideDTO = Optional<CreateRideDTO, 'ride_id'>

export type FilterRidesDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
}