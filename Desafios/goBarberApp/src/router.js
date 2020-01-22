import { Router } from "express";

import authMiddlewares from "./app/middlewares/auth";

import UserController from "./app/controller/UserController";
import SessionController from "./app/controller/SessionController";

const routes = new Router();

routes.post("/users", UserController.store);
routes.post("/session", SessionController.store);

routes.use(authMiddlewares);

routes.put("/users", UserController.update);

export default routes;
