import bluebird from "bluebird";
import mongoose from "mongoose";
import { MONGO_DB_CONNECTION_STRING } from "./env";
// import { Logger } from ‘./log4’;
mongoose.Promise = bluebird;
 
 export const mongoUri = `${MONGO_DB_CONNECTION_STRING}/social-app`;
 const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: false,
};
export const connectMongo = async () => {
  mongoose.set("strictQuery", false);
  console.log(mongoUri);
  await mongoose
    .connect(mongoUri, config)
    .then((db: any) => {
      console.log("connected to db");
    })
    .catch((err: any) => {
      console.log(err);
    });
  return Promise.resolve();
};