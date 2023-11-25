<<<<<<< HEAD
const prod1 = {};

prod1.nome = "Xiaomi S11";
prod1.preco = 4998.9;
prod1["Desconto legal"] = 0.4;/*  evitar atributos com espaço */
const produto = prod1.nome;

console.log(prod1);
console.log(`Produto: ${produto}`);

const prod2 = {
  nome: "Camisa Polo",
  preco: 79.9,
  caracteristica: {
    marca: "Lacoste",
    tamanho: "G"
  },
};

console.log(prod2.nome);
console.log(prod2["caracteristica"]["marca"]);/* forma obsoleta */
=======
const prod1 = {};

prod1.nome = "Xiaomi S11";
prod1.preco = 4998.9;
prod1["Desconto legal"] = 0.4;/*  evitar atributos com espaço */
const produto = prod1.nome;

console.log(prod1);
console.log(`Produto: ${produto}`);

const prod2 = {
  nome: "Camisa Polo",
  preco: 79.9,
  caracteristica: {
    marca: "Lacoste",
    tamanho: "G"
  },
};

console.log(prod2.nome);
console.log(prod2["caracteristica"]["marca"]);/* forma obsoleta */
>>>>>>> origin/main
console.log(prod2.caracteristica.tamanho);