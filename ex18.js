function media(nota1, nota2, nota3) {
  let media = (nota1 + nota2 + nota3) / 3;
  return `Situação : ${media >= 7 && media <= 10 ? "Aprovado" : "Reprovado"}`;
}

console.log(media(7, 7, 7));
console.log(media(5, 7, 7));

function notaRestante(nota1, nota2) {
  let media2 = 21 - (nota1 + nota2);

  return `Você precisa tirar ${media2} para passar por média`;
}

console.log(notaRestante(5, 7));
