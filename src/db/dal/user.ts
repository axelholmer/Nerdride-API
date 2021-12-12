import { Op } from "sequelize";
import User from "../models/User";
import { GetAllUsersFilters } from "./types";
import { UserInput, UserOuput } from "../models/User";
import sequelizeConnection from "../config";

// export const create = async (payload: UserInput): Promise<UserOuput> => {
//     const user = await User.create(payload)
//     return user
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

export const getRides = async (user_id: string): Promise<any> => {
  //   const user = await User.findByPk(user_id);

  const query =
    "SELECT ride_id , (max(total_mileage) - min(total_mileage)) as distance,  AGE(MAX(date), MIN(date)) as duration, (max(battery_level) - min(battery_level)) as discharge, MAX(current) as max_current, MIN(current) as min_current, MIN(date) as start_date, MAX(date) as end_date FROM rides WHERE user_id='" + user_id + "'GROUP by ride_id";
  const [results, metadata] = await sequelizeConnection.query(
    query
  );

  return results;
//   return {results: results, metadata: metadata}
//   if (!user) {
//     // @todo throw custom error
//     throw new Error("not found");
//   }
    // return user;
};

// export const deleteById = async (user_id: string): Promise<boolean> => {
//     const deletedUserCount = await User.destroy({
//         where: {user_id}
//     })
//     return !!deletedUserCount
// }

export const getAll = async (
  filters?: GetAllUsersFilters
): Promise<UserOuput[]> => {
  return User.findAll();
  // return User.findAll({
  //     where: {
  //         ...(filters?.isDeleted && {deletedAt: {[Op.not]: null}})
  //     },
  //     ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
  // })
};
