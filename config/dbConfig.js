module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Admin@1234",
  DB: "node_sequelize_api_db",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idel: 10000,
  },
};
