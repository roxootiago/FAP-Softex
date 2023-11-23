(async () => {
  const database = require("./db");
  const Produto = require("./produto");
  await database.sync();

  /* const novoProduto = await Produto.create({
      nome: "Monitor Gamer",
      preco: 740,
      descricao: "Sinta a gameplay",
    }); */

  const produto = await Produto.findOne({
    where: {
      nome: "Monitor Gamer",
    },
  }); /* imprime de acordo com a função 
  para encontrar pelo id poderia utilizar a função findByPK  ou findAll para todos*/
  console.log(produto);

  produto.preco = 700;
  await produto.save();
})();
