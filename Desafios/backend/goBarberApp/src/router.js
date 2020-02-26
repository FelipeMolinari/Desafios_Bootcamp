import { Router } from "express";

import authMiddlewares from "./app/middlewares/auth";

import UserController from "./app/controller/UserController";
import SessionController from "./app/controller/SessionController";
import FileController from "./app/controller/FileController";
import ProviderController from "./app/controller/ProviderController";

import multerConfig from "./config/multerconfig";

import multer from "multer";

const routes = new Router();
const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post("/session", SessionController.store);

routes.use(authMiddlewares);

routes.put("/users", UserController.update);

routes.get("/providers", ProviderController.index);
routes.post("/files", upload.single("file"), FileController.store);
export default routes;
