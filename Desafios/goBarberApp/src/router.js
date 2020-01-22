import { Router } from "express";
import User from "./app/models/Users";
const routes = new Router();

routes.get("/", async (req, res) => {
  try {
    const user = await User.create({
      name: "Felipe Molinari",
      email: "lalau@gmail.com",
      password_hash: "123456789"
    });
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});
export default routes;
