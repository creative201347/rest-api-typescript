import express from "express";
import config from "config";

import routes from "./routes";

import connect from "./utils/connect";
import log from "./utils/logger";

const app = express();
app.use(express.json());

const port = config.get<number>("port");
app.listen(port, async () => {
  log.info(`http://localhost:${port}`);
  await connect();
  routes(app);
});
