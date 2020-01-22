import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import User from "../app/models/Users";

const models = [User];

class Database {
  constructor() {
    this.init();
  }
  init() {
    // Conexão com a base de dados.
    this.connections = new Sequelize(databaseConfig);
    models.map(model => {
      model.init(this.connections);
    });
  }
}

export default new Database();
