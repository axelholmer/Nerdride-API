import * as service from "../../../db/services/userService";
import { LifetimeData, MonthlytData, RideInfo, User } from "../../interfaces";
import * as mapper from "./mapper";

export const getRides = async (user_id: string): Promise<RideInfo[]> => {
  return (await service.getRides(user_id)).map(mapper.toRideInfo);
};

export const getStats = async (
  user_id: string
): Promise<LifetimeData[]> => {
  return (await service.getStats(user_id)).map(mapper.toStats);
};

export const getStatsMonthly = async (
  user_id: string
): Promise<MonthlytData[]> => {
  return (await service.getStatsMonthly(user_id)).map(mapper.toStatsMonthly);
};
