<<<<<<< HEAD
/* declaração das variáveis */
var meses = ['Jan', 'Fev', 'Mar', 'Abr'];
const readline = require('readline-sync');
let status = 1;

/* enquanto a variável status for igual a 1 irá continuar rodando o loop */
while(status == 1){
    let op = readline.question(" Digite 1 - Inserir, 2 - Alterar, 3 - Excluir, 4 - Listar: ")/* lendo o menu */
    switch (op){ /* caso atenda a alguma opção do menu irá executar as funções determinadas */
        case '1':
            inserirMes();
            break;
        case '2':
            alterar();
            break;  
        case '3':
            (excluirMes);
            break;                
        case '4':
            listarMes();
            break;    
    }

    status = readline.question("Digite 1 para continuar no Sistema e 2 para sair: "); 
}

function inserirMes(){
    console.log("-------Tela de cadastro de registro--------");
    let mes = readline.question("Digite o mes: ");/* lê o mês que deseja inserir */
    meses.push(mes);/* adiciona o mês digitado ao array meses */
    listarMes(); /* lista todos os meses de acordo com a função */

} 
function listarMes(){
    console.log("-------Relatorio de todos os registro--------");
    for(var i = 0; i < meses.length; i++){ /* enquanto os i for menor que o tamanho do array meses irá exibir os meses */
        console.log(meses[i]);
    }
}

function retornaIndice(texto){
    let indice =  meses.indexOf(texto);
    return indice; /* idá retornar o índice do atributo passado */
    //console.log(indice);
}

function alterar(){/* altera o registro */
    consle.log("-------Tela alterar o registro--------");
    listarMes();
    var mesAlterar = redline.question("Escolha o registro: ");
    var novoValor = readline.question("Informe o novo conteudo: ");
    var registro = retornaIndice(mesAlterar);/* modifica o para o mes desejado */
    meses[registro = novoValor]; /* a variável registro agora corresponde à variável novo valor */
    listarMes();
}

function excluirMes(){
    console.log("-------Tela excluir o registro--------");
    listarMes();
    var mesExcluir = readline.question("Escolha o registro: ");/* lê o mês que deseja excluir */
    var  registro =  retornaIndice(mesExcluir); /* irá pegar o indice do mês escolhido */
    meses.splice(registro,1);/* irá excluir de acordo com o indice a função splice corresponde a
    splice(indice,quantidade de indice) */
    listarMes();

=======
/* declaração das variáveis */
var meses = ['Jan', 'Fev', 'Mar', 'Abr'];
const readline = require('readline-sync');
let status = 1;

/* enquanto a variável status for igual a 1 irá continuar rodando o loop */
while(status == 1){
    let op = readline.question(" Digite 1 - Inserir, 2 - Alterar, 3 - Excluir, 4 - Listar: ")/* lendo o menu */
    switch (op){ /* caso atenda a alguma opção do menu irá executar as funções determinadas */
        case '1':
            inserirMes();
            break;
        case '2':
            alterar();
            break;  
        case '3':
            (excluirMes);
            break;                
        case '4':
            listarMes();
            break;    
    }

    status = readline.question("Digite 1 para continuar no Sistema e 2 para sair: "); 
}

function inserirMes(){
    console.log("-------Tela de cadastro de registro--------");
    let mes = readline.question("Digite o mes: ");/* lê o mês que deseja inserir */
    meses.push(mes);/* adiciona o mês digitado ao array meses */
    listarMes(); /* lista todos os meses de acordo com a função */

} 
function listarMes(){
    console.log("-------Relatorio de todos os registro--------");
    for(var i = 0; i < meses.length; i++){ /* enquanto os i for menor que o tamanho do array meses irá exibir os meses */
        console.log(meses[i]);
    }
}

function retornaIndice(texto){
    let indice =  meses.indexOf(texto);
    return indice; /* idá retornar o índice do atributo passado */
    //console.log(indice);
}

function alterar(){/* altera o registro */
    consle.log("-------Tela alterar o registro--------");
    listarMes();
    var mesAlterar = redline.question("Escolha o registro: ");
    var novoValor = readline.question("Informe o novo conteudo: ");
    var registro = retornaIndice(mesAlterar);/* modifica o para o mes desejado */
    meses[registro = novoValor]; /* a variável registro agora corresponde à variável novo valor */
    listarMes();
}

function excluirMes(){
    console.log("-------Tela excluir o registro--------");
    listarMes();
    var mesExcluir = readline.question("Escolha o registro: ");/* lê o mês que deseja excluir */
    var  registro =  retornaIndice(mesExcluir); /* irá pegar o indice do mês escolhido */
    meses.splice(registro,1);/* irá excluir de acordo com o indice a função splice corresponde a
    splice(indice,quantidade de indice) */
    listarMes();

>>>>>>> origin/main
}