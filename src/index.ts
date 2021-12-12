import express from "express";
import { DatabaseConnection } from "./module/database";
import morgan from "morgan";
import helmet from "helmet";
// import { router } from "../api/controller/router";
import { router } from "./api/router";

/** Variables */
const app: express.Application = express();

// /**Middleware */
app.use(morgan("common"));

app.use(helmet());

app.use(express.json());

// /** Routes */
app.use("/nerdrideapi", router);

/** Start the server */
DatabaseConnection.connect()
  .then(() => {
    console.log("connected");
    app.listen(3000, () => {
      console.log(`Server is running on port ${3000}...`);
    });
  })
  .catch((error: Error) => {
    console.log(error);
  });

// /** Start our server */
// DatabaseConnection.connect()
//   .then(() => {
// app.listen(process.env.API_PORT, () => {
//   console.log(`Server is running on port ${process.env.API_PORT}...`);
// });
//   })
//   .catch((error: Error) => {
// console.log(error);
//   });
