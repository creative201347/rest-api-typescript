import { Express } from "express";
import { createUserHandler } from "../controllers/user.controller";
import { createUserSchema } from "../schema/user.schema";
import validateResource from "../middleware/validateResource";
import { createSessionSchema } from "../schema/session.schema";
import { createUserSessionHandler } from "../controllers/session.controller";

function routes(app: Express) {
  app.post("/api/users", validateResource(createUserSchema), createUserHandler);
  app.post(
    "/api/sessions",
    validateResource(createSessionSchema),
    createUserSessionHandler
  );
}

export default routes;
