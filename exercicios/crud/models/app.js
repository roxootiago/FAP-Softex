const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("crudform", "root", "senha", {
  host: "localhost",
  dialect: "mysql", 
});

async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
  } catch (error) {
    console.error("Erro ao conectar-se ao banco de dados:", error);
  }
}

testDatabaseConnection();