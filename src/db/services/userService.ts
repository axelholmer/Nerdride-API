import db from "../db";

/**
 *  Query DB for rides one particular user
 * @param user_id 
 * @returns Query results
 */
export const getRides = async (user_id: string): Promise<any[]> => {
  const client = await db.connect();
  const sql =
    "SELECT ride_id , (MAX(total_mileage) - MAX(total_mileage)) AS distance,  AGE(MAX(date), MIN(date)) AS duration," +
    "(MAX(battery_level) - MAX(battery_level)) AS discharge, MAX(current) AS max_current, MIN(current) AS min_current, MIN(date) AS start_date," +
    "MAX(date) AS end_date FROM rides WHERE user_id='" +
    user_id +
    "'GROUP BY ride_id";
  const { rows } = await client.query(sql);
  client.release();
  return rows;
};

/**
 *  Query DB for user lifetime stats
 * @param user_id 
 * @returns Query results
 */
export const getStats = async (user_id: string): Promise<any[]> => {
  const client = await db.connect();
  const sql =
    "WITH total_duration_query AS (SELECT SUM(duration) AS total_duration, user_id " +
    "FROM (SELECT AGE(MAX(date), MIN(date)) AS duration, user_id FROM rides " +
    "WHERE user_id='" +
    user_id +
    "' " +
    "GROUP BY ride_id, user_id) AS total_duration_table " +
    "GROUP BY user_id), total_distance_query " +
    "AS (SELECT SUM(distance) AS total_distance, user_id FROM (SELECT (MAX(total_mileage) - MIN(total_mileage)) AS distance , user_id " +
    "FROM rides WHERE user_id='" +
    user_id +
    "' " +
    "GROUP by ride_id, user_id) AS distance_table GROUP BY user_id) " +
    "SELECT COUNT(DISTINCT ride_id) AS ride_count, total_duration_query.total_duration, total_distance_query.total_distance FROM rides " +
    "INNER JOIN total_duration_query ON total_duration_query.user_id = rides.user_id " +
    "INNER JOIN total_distance_query ON total_distance_query.user_id = rides.user_id " +
    "WHERE rides.user_id='" +
    user_id +
    "' " +
    "GROUP BY total_duration_query.total_duration, total_distance_query.total_distance;";

  const { rows } = await client.query(sql);
  client.release();
  return rows;
};

/**
 *  Query DB for user monthly stats
 * @param user_id 
 * @returns Query results
 */
export const getStatsMonthly = async (user_id: string): Promise<any[]> => {
  const client = await db.connect();
  const sql =
    "Select date_trunc('month', month) AS date, SUM(distance) AS total_distance, SUM(duration) AS total_duration FROM " +
    "(WITH distincDate AS (SELECT DISTINCT date_trunc('month', date) AS month, ride_id FROM rides " +
    "WHERE rides.user_id = '" +
    user_id +
    "' GROUP BY ride_id, date) " +
    "SELECT MAX(total_mileage) - MIN(total_mileage) AS distance, AGE(MAX(date), MIN(date)) AS duration, month FROM rides " +
    "INNER JOIN distincDate ON distincDate.ride_id = rides.ride_id " +
    "WHERE rides.user_id = '" +
    user_id +
    "' " +
    "GROUP BY rides.ride_id, distincDate.month) AS tb1 GROUP BY 1 ORDER BY 1 DESC LIMIT 12;";

  const { rows } = await client.query(sql);
  client.release();
  return rows;
};
