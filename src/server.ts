import express from "express";

import config from "config";
import database from "./utils/database";
import logger from "./utils/logger";
import routes from "./routes";
import deserializeUser from "./middleware/deserializeUser";

const port = config.get<number>("port");
const app = express();
app.use(express.json());
app.use(deserializeUser);

app.listen(port, async () => {
  logger.info(`http://localhost:${port}`);
  await database();
  routes(app);
});
