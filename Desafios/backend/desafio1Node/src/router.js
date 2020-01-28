const express = require("express");
const projetController = require("./controllers/projectController");
const tasksController = require("./controllers/tasksController");
let reqCount = 0;
const routes = express.Router();

routes.use((req, res, next) => {
  reqCount++;
  console.log(`METHOD: ${req.method} URL: ${req.url} countReq: ${reqCount}`);

  next();
});

function checkProjectExist(req, res, next) {
  if (!projetController.show(req)) {
    return res.status(400).json({ error: "Project does not exist!" });
  }

  return next();
}
routes.post("/projects", projetController.store);

routes.get("/projects", projetController.index);

routes.delete("/projects/:id", checkProjectExist, projetController.destroy);

routes.put("/projects/:id", checkProjectExist, projetController.update);

routes.put("/projects/:id/tasks", checkProjectExist, tasksController.store);

module.exports = routes;
