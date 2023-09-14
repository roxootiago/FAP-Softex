function parOuImpar(num) {
  if (num % 2 == 0) {
    return `${num} é par!`;
  } else {
    return `${num} é ímpar!`;
  }
}

console.log(parOuImpar(2));
console.log(parOuImpar(3));
