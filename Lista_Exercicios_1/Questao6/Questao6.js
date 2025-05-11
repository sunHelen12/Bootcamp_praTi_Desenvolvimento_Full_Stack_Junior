/** 
* Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
* formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
* Isósceles, escaleno ou eqüilátero.

* Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
* Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
* Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
* Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/

const prompt = require('prompt-sync')();

console.log('--------TRIÂNGULOS--------');

let a = Number(prompt('Digite o Lado A: '));
let b = Number(prompt('Digite o Lado B: '));
let c = Number(prompt('Digite o Lado C: '));

if (a < (b + c) && b < (a + c) && c < (a + b)){
    if(a == b || a == c || b == c){
        console.log('Triângulo Isósceles!')
    }else if(a != b && b != c){
        console.log('Triângulo Escaleno!')
    }else if(a == b && b == c){
        console.log('Triângulo Equilátero!')
    }
}else{
    console.log('Não é um triângulo!');
}