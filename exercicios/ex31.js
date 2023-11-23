const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o primeiro número: ", (num1) => {
  rl.question("Digite o segundo número: ", (num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    try {
        function divisao (num1,num2) {
            if (num2 === 0) {
                throw new Error ('não é possível dividir por 0')
            } else {
                return `${num1} ÷ ${num2} = ${(num1 / num2).toFixed(2)}`;
            }
        }
    } catch (err) {
        return `erro: ${err.mensage}`
    }
    console.log(divisao(num1,num2))
    rl.close()
  });
});
