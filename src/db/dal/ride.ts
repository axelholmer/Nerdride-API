import { Op } from "sequelize";
import Ride from "../models/Ride";
import { GetAllRidesFilters } from "./types";
import { RideInput, RideOutput } from "../models/Ride";

// export const create = async (payload: RideInput): Promise<RideInput> => {
//     const ride = await Ride.create(payload)
//     return ride
// }

// export const update = async (user_id: string, payload: Partial<UserInput>): Promise<UserOuput> => {
//     const user = await User.findByPk(user_id)
//     if (!user) {
//         // @todo throw custom error
//         throw new Error('not found')
//     }
//     const updatedUser = await (user as User).update(payload)
//     return updatedUser
// }

export const getById = async (ride_id: string): Promise<RideOutput> => {
  const ride = await Ride.findByPk(ride_id);
  if (!ride) {
    throw new Error("not found");
  }
  return ride;
};

// export const deleteById = async (user_id: string): Promise<boolean> => {
//     const deletedUserCount = await User.destroy({
//         where: {user_id}
//     })
//     return !!deletedUserCount
// }

export const getAll = async (
  filters?: GetAllRidesFilters
): Promise<RideOutput[]> => {
  return Ride.findAll();
  // return User.findAll({
  //     where: {
  //         ...(filters?.isDeleted && {deletedAt: {[Op.not]: null}})
  //     },
  //     ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
  // })
};
