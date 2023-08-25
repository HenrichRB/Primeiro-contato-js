// tipos primitivos

// boolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// string
var nome = 'Henrique';
console.log(typeof(nome));

// Como declarar
var variavel = 'Henrique';
variavel = 'Luisinho';
console.log(variavel) ;

let variavel2 = 'Henrique';
variavel2 = 'Luisinho';
console.log(variavel2);

const constante = 'Henrique';
constante = 'Luisinho';
console.log(constante); 

var escopoGlobal = 'Global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'Local';
    console.log(escopoLocalInterno);
}

escopoLocal(); 

// Atribuição
var atribuicao = 'Henrique';

// Comparação
var comparacao = '0' == 0;
console.log(comparacao);

 // Comparação identica
 var comparacaoIdentica = '0' === 0;
 console.log(comparacaoIdentica);

 // Adição
var adicao = 1 + 1;
console.log(adicao);

// Subtração
var subtracao = 2 - 1;
console.log(subtracao);

// Multiplicação
var multiplicação = 2 * 3;
console.log(multiplicação);

// Divisão Real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

// Divisão Inteira ou Resto da Divisão
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

// Potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao); 

// Maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

// Menor que
var menorQue = 5 < 2;
console.log(menorQue);

// Maior ou igual
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

// Menor ou igual
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao)
