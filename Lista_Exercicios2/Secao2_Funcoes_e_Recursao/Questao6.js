/**
 * 6. Memoization​
 * Implemente function memoize(fn) que armazene em cache chamadas
 * anteriores de fn (por argumentos), retornando resultados instantâneos em
 * repetidas invocações. 
 */

function memoize(fn){
    const cache = {};
    
    return function (...args){
        const chave = JSON.stringify(args);

        if(cache [chave]){
            console.log("Salvo no Cache: ", chave);
            return cache[chave];
        }

        const resultado = fn(...args);
        cache[chave] = resultado;
        return resultado;
    };
}

function fatorial(n){
    if(n < 0){
        return 'Error';
    }

    if(n === 0 || n === 1){
        return 1;
    }

    return n * fatorial(n - 1); 
}

const fatorialMemoize = memoize(fatorial);

console.log(fatorialMemoize(5));
console.log(fatorialMemoize(5));
console.log(fatorialMemoize(10));