const { parseStringToArray } = require("../utils/parseStringToArray");

let arrayProjects = [];
let idCount = 0;
class Project {
  constructor(id, title, task) {
    this.id = id;
    this.title = title;
    this.tasks = task;
  }
}

function getAProject(id) {
  console.log(arrayProjects, id);
  return arrayProjects.find(elem => elem.id == id);
}
function indexProjects() {
  return arrayProjects;
}
function createProject({ title, tasks }) {
  const arrayParsed = parseStringToArray(tasks);
  const p = new Project(idCount, title, arrayParsed);

  idCount += 1;
  arrayProjects.push(p);

  return p;
}

function deleteProject({ id }) {
  const novoArray = arrayProjects.filter(elem => elem.id != id);
  if (novoArray.length == arrayProjects.length) {
    return null;
  }
  arrayProjects = novoArray;
  return arrayProjects;
}

function updateProject(project_id, novoTitle) {
  const toUpdate = arrayProjects.find(elem => elem.id == project_id);
  if (toUpdate) {
    toUpdate.title = novoTitle;
    arrayProjects.splice(toUpdate.id, 1, toUpdate);
    return true;
  }
  return false;
}

function storeTask({ id }, { task }) {
  const toStoreTask = arrayProjects.find(elem => elem.id == id);
  const arrayTask = parseStringToArray(task);
  if (toStoreTask) {
    const newArry = [...toStoreTask.tasks, ...arrayTask];
    toStoreTask.tasks = newArry;
    return true;
  }
  return false;
}
module.exports = {
  Project,
  createProject,
  indexProjects,
  deleteProject,
  updateProject,
  storeTask,
  getAProject
};
