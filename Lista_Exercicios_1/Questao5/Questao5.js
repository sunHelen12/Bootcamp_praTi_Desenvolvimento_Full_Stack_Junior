/**
 * 5 - Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
 * determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
 * utilizando if-else.
 * 
 * Baixo peso: IMC < 18,5; Peso normal:IMC entre 18,5 e 24,9; Sobrepeso:IMC entre 25 e 29,9;
 * Obesidade:
 * Grau I (leve): IMC entre 30,0 e 34,9
 * Grau II (moderada): IMC entre 35,0 e 39,9
 * Grau III (grave ou mórbida): IMC ≥ 40,0; * 
 */

const prompt = require('prompt-sync')();

let peso = parseFloat(prompt('Digite seu peso: '));
let altura = parseFloat(prompt('Digite a sua altura(em Metros): '));

let imc = peso / (altura**2);

if (imc > 0 && imc < 18.5){
    console.log(`Seu IMC é aproximadamente: ${imc.toFixed(2)}!
Baixo peso!`);
}else if(imc >= 18.5 && imc < 25){
    console.log(`Seu IMC é aproximadamente: ${imc.toFixed(2)}!
Peso normal!`);
}else if(imc >= 25 && imc < 30){
    console.log(`Seu IMC é aproximadamente: ${imc.toFixed(2)}!
Sobrepeso!`);   
}else if(imc >= 30 && imc < 35){
    console.log(`Seu IMC é aproximadamente: ${imc.toFixed(2)}!
Obesidade Grau I (Leve)!`);   
}else if(imc >= 35 && imc < 40){
    console.log(`Seu IMC é aproximadamente: ${imc.toFixed(2)}!
Obesidade Grau II (moderada)!`);  
}else if(imc >= 40){
    console.log(`Seu IMC é aproximadamente: ${imc.toFixed(2)}!
Obesidade Grau III (grave ou mórbida)!`);  
}