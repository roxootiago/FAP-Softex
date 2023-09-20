const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Quem é você?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });