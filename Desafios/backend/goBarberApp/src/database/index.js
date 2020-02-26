import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import User from "../app/models/Users";
import File from "../app/models/Files";
import Appointments from "../app/models/Appointment";
const models = [User, File, Appointments];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // Conexão com a base de dados.
    this.connections = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connections))
      .map(
        model => model.associete && model.associete(this.connections.models)
      );
  }
}

export default new Database();
