/**
 * 5. Debounce​
 * Crie function debounce(fn, delay) que receba uma função fn e um delay
 * em ms, retornando uma nova função que só executa fn se não for
 * chamada novamente dentro do intervalo.
 */

function debounce(fn, delay){
    let idTemporizador;

    return function (...args){
        if(idTemporizador){
            clearTimeout(idTemporizador);
        }
        
        idTemporizador = setTimeout(() => {
            fn.apply(this, args);

        }, delay);
    };
}

function frase(){
    console.log('Melodia...');
}

const fraseDebounce = debounce(frase, 1000);

fraseDebounce();
