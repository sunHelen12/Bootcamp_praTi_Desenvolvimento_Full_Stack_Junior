/**
 * 12 - Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
 * 10) utilizando um loop for.
 */

const prompt = require('prompt-sync')();

console.log(`
=========================================
                TABUADA
=========================================`);

let num = Number(prompt('Número: '));

console.log('=========================================');

for(let i = 1; i <= 10; i++){    
    console.log(`${i} X ${num} = ${i * num}`);
}

