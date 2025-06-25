/**
 * 9. Conversão Entre Formatos​
 * Escreva duas funções:
 * ○​ paresParaObjeto(pares) recebe um array de pares [ [chave,
 * valor], ... ] e retorna o objeto equivalente.
 * ○​ objetoParaPares(obj) faz o inverso, retornando um array de
 * pares.
 */

function paresParaObjeto(pares){
    return pares.reduce((obj, [chave, valor]) => {
        obj[chave] = valor;
        return obj;        
    }, {});
}

function objetoParaPares(obj){
    return Object.entries(obj);
}

const pares = [['nome', 'Marceline'], ['idade', 1003]];

const obj = paresParaObjeto(pares);
console.log(obj);
const deVolta = objetoParaPares(obj);
console.log(deVolta);