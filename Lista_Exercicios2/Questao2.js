/**
 * 2. Jogo de Adivinhação​
 * Escreva um script que gere um número aleatório de 1 a 100 e peça ao
 * usuário, para adivinhar. Use while para repetir até acertar, contando
 * tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.  
 */

const prompt = require('prompt-sync')();

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let numero = parseInt(prompt('Tente adivinhar um número entre 1 e 100: '));

let cont = 1;

while(numero != numeroAleatorio){

    if(numero > numeroAleatorio){
        console.log('Mais baixo!')
    }

    if(numero < numeroAleatorio){
        console.log('Mais Alto!')
    }

    cont++;

    numero = parseInt(prompt('Tente um novo número: '));

}

console.log(`Acertou com ${cont} tentativas! O número correto é ${numero}!`);
