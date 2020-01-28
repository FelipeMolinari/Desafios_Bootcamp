const {
  createProject,
  indexProjects,
  deleteProject,
  updateProject,
  getAProject
} = require("../Models/Project");
// index, show, store, update, delete

module.exports = {
  show(req, res) {
    const { id } = req.params;
    return getAProject(id);
  },
  store(req, res) {
    const novoProject = createProject(req.body);
    return res.send({
      message: `Projeto '${novoProject.title}' cadastrado com sucesso!!`
    });
  },

  index(req, res) {
    return res.json(indexProjects());
  },

  destroy(req, res) {
    deleteProject(req.params);
    res.send({ message: "Projeto removido com sucesso" });
  },
  update(req, res) {
    const { id } = req.params;
    const { title } = req.body;
    updateProject(id, title);
    res.send({ message: "Projeto alterado" });
  }
};
