/**
 * 15 - Escreva um programa que gera e imprime os primeiros 10 números da sequência de
 * Fibonacci utilizando um loop for.
 */

let num = 10;
let numInicial = 0;
let segundoNum = 1;

console.log('---------Sequência de Fibonacci---------')
for (let i = 0; i < num; i++) {    
    console.log(numInicial);
    let proximoNumero = numInicial + segundoNum;
    numInicial = segundoNum;
    segundoNum = proximoNumero;
}


