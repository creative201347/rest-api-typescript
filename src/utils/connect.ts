import mongoose from "mongoose";
import config from "config";
import log from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    mongoose.connect(dbUri);
    log.info("Successfully connected to database!!");
  } catch (error) {
    log.error("Couldn't connect to db", error);
    process.exit(1);
  }
}
export default connect;
