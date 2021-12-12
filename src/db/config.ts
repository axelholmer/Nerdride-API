import { Dialect, Sequelize } from "sequelize";

// const dbName = process.env.DB_NAME as string
// const dbUser = process.env.DB_USER as string
// const dbHost = process.env.DB_HOST
// const dbDriver = process.env.DB_DRIVER as Dialect
// const dbPassword = process.env.DB_PASSWORD

const dbName = "nerdride";
const dbUser = "nerdride";
const dbHost = "nerdride-case-assignment-mathias-0adc.aivencloud.com";
const dbPort = 21199;
const dbDriver = "postgres";
const dbPassword = "TWpgM11xkrgijfAr";

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: dbDriver,
  protocol: dbDriver,
  dialectOptions: {
    // For prod this must be changed!
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export default sequelizeConnection;
