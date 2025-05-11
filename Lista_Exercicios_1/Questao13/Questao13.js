/**
 * Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
 * a média aritmética desses números.
 */

const prompt = require('prompt-sync')();

let cont = 0;
let soma = 0;
let num = 1;


while(num != 0){
    num = parseFloat(prompt('Digite um número: '));
    soma += num;
   if(num != 0) cont++;
}

console.log(`Média Aritmética = ${cont > 0 ? soma / cont : 0}`)



