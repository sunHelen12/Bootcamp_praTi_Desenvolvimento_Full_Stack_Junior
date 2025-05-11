/**
 * 4 - Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
 * Utilize switch-case para implementar a lógica de cada opção selecionada.
 */

const prompt = require('prompt-sync')();

console.log(`
=========================================
           PÓKEMON SURPRESA
=========================================
Ecolha entre a opção A, B e C e ganhe um
Pókemon Surpresa!
`);

let opcao = prompt('Digite uma das opções [A - B - C]: ');
opcao = opcao.toUpperCase();

switch (opcao) {
    case 'A':
        console.log('Você encontrou o Charizard!');
        break;
    case 'B':
        console.log('Você encontrou o Bulbasaur!');
        break;
    case 'C':
        console.log('Você encontrou o Pikachu!');
        break;
    default:
        console.log('Opção Inválida!');
        break;
}