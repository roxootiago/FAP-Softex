let booleano;
let bigInteger;
let string1;
let symbol1;

console.log(`Boolean: ${booleano}
BigInt: ${bigInteger}
String: ${string1}
Symbol: ${symbol1}\n`);

booleano = null;
bigInteger = null;
string1 = null;
symbol1 = null;

console.log(`Boolean: ${booleano}
BigInt: ${bigInteger}
String: ${string1}
Symbol: ${symbol1}\n`);

booleano = true;
bigInteger = 9999999999999999;
string1 = "hello world";
symbol1 = Symbol("index");
const meuObjeto = { [symbol1]: "Teste Symbol" };

console.log(`Boolean: ${booleano}
BigInt: ${bigInteger}
String: ${string1}`);
console.log(meuObjeto);
