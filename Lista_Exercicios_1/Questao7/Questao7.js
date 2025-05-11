/**
 * As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
 * forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
 * compradas, calcule e escreva o valor total da compra.
 */

const prompt = require('prompt-sync')();

console.log(`
=========================================
              APPLES STORE
=========================================`);

let quantidade = Number(prompt('Digite a quantidade de maçãs: '));

if (quantidade > 0 && quantidade < 12){
    console.log(`Você comprou ${quantidade} maçã(s)!`);
    console.log(`Total à pagar: R$${(quantidade * 0.30).toFixed(2)}`);
}else if(quantidade >= 12){
    console.log(`Você comprou ${quantidade} maçãs!`);
    console.log(`Total à pagar: R$${(quantidade * 0.25).toFixed(2)}`);
}else{
    console.log('Quantidade Inválida!')
}