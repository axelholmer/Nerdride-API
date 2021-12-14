import db from "../db";

/**
 *  Query DB for raw data of one particular ride
 * @param ride_id 
 * @returns Query results
 */
export const getById = async (ride_id: string): Promise<any[]> => {
  const client = await db.connect();
  const sql = "SELECT * FROM rides WHERE ride_id='" + ride_id + "';";
  const { rows } = await client.query(sql);
  console.log(rows);
  client.release();
  return rows;
};
