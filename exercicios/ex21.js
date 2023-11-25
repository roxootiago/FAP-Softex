const pessoa = [
  { nome: "Tiago", idade: 20, profissao: "desenvolvedor", cidade: "Olinda" },
  {
    nome: "Natasha",
    idade: 20,
    profissao: "Médica",
    cidade: "Olinda",
  },
  {
    nome: "Larissa",
    idade: 20,
    profissao: "Empresária",
    cidade: "Recife",
  },
  {
    nome: "Lucas",
    idade: 26,
    profissao: "Advogado",
    cidade: "Paulista",
  },
];

for (const i of pessoa) {
  console.log(i);
}

for (const j in pessoa) {
  console.log(
    `${j}) Nome: ${pessoa[j].nome} | Idade: ${pessoa[j].idade} | Profissão: ${pessoa[j].profissao} | Cidade: ${pessoa[j].cidade}`
  );
}
