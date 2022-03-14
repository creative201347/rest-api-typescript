import { Express } from "express";
import { createUserHandler } from "../controllers/user.controller";
import { createUserSchema } from "../schema/user.schema";
import validateResource from "../middleware/validateResource";

function routes(app: Express) {
  app.post("/api/users", validateResource(createUserSchema), createUserHandler);
}

export default routes;
