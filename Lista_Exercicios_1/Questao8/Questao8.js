/**
 * Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
 * e escreve-los em ordem crescente.
 */

const prompt = require('prompt-sync')();

let num1 = Number(prompt('Digite o primeiro número: '));
let num2 = Number(prompt('Digite o segundo número: '));

if(num1 > num2){
    console.log(`Ordem Crescente: ${num2}, ${num1}`);
}else if (num2 > num1){
    console.log(`Ordem Crescente: ${num1}, ${num2}`);
}else{
    console.log(`Números ${num1} e ${num2} são Iguais!`);
}