import express from "express";
import { DatabaseConnection } from "./module/database";

/** Variables */
const app: express.Application = express();

// /** Global middleware */
// app.use(morgan('combined'));

// app.use(bodyParser.json());

// /** Routes */
// app.use('/api', globalRouter)

/** Start our server */
DatabaseConnection.connect()
  .then(() => {
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
