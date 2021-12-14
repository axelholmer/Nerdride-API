import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import { Authentication } from "./module/authentication";
import { router } from "./api/router";
import db from "./db/db";
import jwt from "jsonwebtoken";

/** Variables */
const app: express.Application = express();

/** Middleware */
app.use(morgan("common"));

app.use(helmet());

app.use(express.json());

app.use(Authentication.verifyAccess);

// /** Routes */
app.use("/nerdrideapi", router);

/** Start the server */
db.connect((err, client, done) => {
  if (err) throw new Error(err.message);
  console.log("Connected");
  app.listen(3000, () => {
    console.log(`Server is running on port ${3000}...`);
  });
});