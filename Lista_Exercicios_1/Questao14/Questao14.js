/**
 * 14 - Crie um programa que calcula o fatorial de um número fornecido pelo usuário
 * utilizando um loop for ou while.
 */

const prompt = require('prompt-sync')();

let num = parseFloat(prompt('Digite um número para fatorar: '));
let resultado = 1;
let cont = num;

while(cont > 1){    
    resultado *=  cont;
    cont--;   
}

console.log(`O fatorial de ${num} é: ${resultado}`);



