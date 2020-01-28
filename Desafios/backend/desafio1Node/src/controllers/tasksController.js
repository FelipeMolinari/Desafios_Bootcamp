const { storeTask } = require("../Models/Project");

module.exports = {
  store(req, res) {
    const status = storeTask(req.params, req.body);
    if (status) {
      res.send({ message: "Task criada com sucesso!!" });
    } else {
      res.send({ message: "Projeto não existe!!" });
    }
  }
};
