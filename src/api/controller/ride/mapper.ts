import { Ride } from "../../interfaces";
import { RideOutput } from "../../../db/models/Ride";

export const toRide = (ride: RideOutput): Ride => {
  return {
    ride_id: ride.ride_id,
    user_id: ride.user_id,
    date: ride.date,
    speed: ride.speed,
    voltage: ride.voltage,
    pwm: ride.pwm,
    current: ride.current,
    power: ride.power,
    battery_level: ride.battery_level,
    total_mileage: ride.total_mileage,
    temperature: ride.temperature,

    createdAt: ride.createdAt,
    updatedAt: ride.updatedAt,
    deletedAt!: ride.deletedAt
  };
};
