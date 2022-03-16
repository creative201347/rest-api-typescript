import { Express } from "express";
import { createUserHandler } from "../controllers/user.controller";
import { createUserSchema } from "../schema/user.schema";
import validateResource from "../middleware/validateResource";
import { createSessionSchema } from "../schema/session.schema";
import {
  createUserSessionHandler,
  deleteSessionsHandler,
  getUserSessionsHandler,
} from "../controllers/session.controller";
import requireUser from "../middleware/requireUser";

function routes(app: Express) {
  app.post("/api/users", validateResource(createUserSchema), createUserHandler);
  app.post(
    "/api/sessions",
    validateResource(createSessionSchema),
    createUserSessionHandler
  );
  app.get("/api/sessions", requireUser, getUserSessionsHandler);
  app.delete("/api/sessions", requireUser, deleteSessionsHandler);
}

export default routes;
