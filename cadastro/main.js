let nome = "Nathalia";
let salario = 8090;
let idade = 25;
let diploma = true;
let pessoa = [
  {
    nomePessoa: nome,
    salario: `R$${salario}`,
    idade: idade,
  },
  {
    nomePessoa: "Tiago",
    salario: `R$6000`,
    idade: 26,
  },
];

for (var valor of pessoa) {
  console.log(`Nome: ${valor.nomePessoa}`);
}

pessoa.forEach((valor) => {
  console.log(`Idade: ${valor.idade}`);
}); // utilizando arrow function

pessoa.forEach(function (valor) {
  console.log(`Salário: ${valor.salario}`);
}); // utilizando default function

console.log(
  `${pessoa[0].nomePessoa} e ${pessoa[1].nomePessoa} estão namorando atualmente`
);
