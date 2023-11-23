const pontuacao = new Map([
  ["João", 50],
  ["Pedro", 120],
  ["Luiza", 70],
  ["Marcela", 10],
  ["Yuri", 34],
]);

pontuacao.forEach((valor, chave) => {
  console.log(`${chave} fez ${valor} pontos`);
});
