import { createConnection, Connection } from "typeorm";
import { User } from "../entity/User";
import {Client, Pool, PoolClient } from 'pg';

export class DatabaseConnection {
  /**
   * Connect to the database
   *
   * @returns {Promise<Connection>} Connection to the database
   */
  public static async connect(): Promise<PoolClient> {
    console.log("Connecting to database...");

    // console.log(
    //   "username: " + process.env.DBUSER + "  DBPASS: " + process.env.DBPASSWORD
    // );

    // return await createConnection({
    //   type: "postgres",
    //   host: process.env.DBHOST,
    //   port: Number(process.env.DBPORT),
    //   username: process.env.DBUSER,
    //   password: process.env.DBPASSWORD,
    //   database: process.env.DBDATABASE,
    //   entities: [__dirname + "../../entity/*.js"],
    //   synchronize: true,
    //   logging: false,
    // });

  //   return await createConnection({
  //       type: "postgres",
  //       host: "nerdride-case-assignment-mathias-0adc.aivencloud.com",
  //       port: 21200,
  //       username: "nerdride",
  //       password: "TWpgM11xkrgijfAr",
  //       database: "nerdride",
  //       entities: [User],
  //       ssl: {
  //           rejectUnauthorized : false,
  //       }
  //     });
  // }

  const pool = new Pool({
    host: "nerdride-case-assignment-mathias-0adc.aivencloud.com",
    port: 21200,
    user: "nerdride",
    password: "TWpgM11xkrgijfAr",
    database: "nerdride",
    ssl: {
      rejectUnauthorized: false
    }
  })
  return await pool.connect()
  }
  /**
   * Connect to the database for our tests as a secondary connection
   *
   * @returns {Promise<Connection>} Connection to the database
   */
  public static async connectTest(): Promise<Connection> {
    console.log("Connecting to test database...");
    console.log(
      "username: " +
        process.env.DBPASSWORD +
        "  DBPASS: " +
        process.env.DBPASSWORD
    );
    return await createConnection({
      name: "test-connection",
      type: "mysql",
      host: process.env.DBHOST,
      port: Number(process.env.DBPORT),
      username: process.env.DBUSER,
      password: process.env.DBPASSWORD,
      database: process.env.DBDATABASE,
      entities: [__dirname + "../../entity/*.ts"],
      synchronize: true,
      logging: false,
    });
  }
}
