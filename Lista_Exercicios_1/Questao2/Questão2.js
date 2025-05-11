/**
 * 02 - Crie um programa que classifica a idade de uma pessoa em categorias (criança,
 * adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
 * controle if-else. 
 * 
 * Segundo a Organização Mundial da Saúde(OMS) as faixas etárias são classificadas da seguinte 
 * forma:
 * 
 * Criança: 0 - 12 anos;  Adolescente: 13 - 17 anos; Adulto: 18 - 64  anos; Idoso: 65+ anos;
 */

const prompt = require('prompt-sync')();

let idade = parseInt(prompt('Digite uma idade: '));

if(idade >= 0 && idade <= 12){
    console.log('Classificação:', idade, 'anos - Criança.');
}else if(idade > 12 && idade <= 17){
    console.log('Classificação:', idade, 'anos - Adolescente.');
}else if(idade > 17 && idade <= 64){
    console.log('Classificação:', idade, 'anos - Adulto.');
}else if (idade > 64 && idade >= 65){
    console.log('Classificação:', idade, 'anos - Idoso.');
}else{
    console.log('Idade Inválida!')
}