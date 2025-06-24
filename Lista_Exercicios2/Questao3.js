/**
 * 3. Palavras Únicas​
 * Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
 * todas as palavras únicas e exibi-las em um array. 
 */


const frase = 'olá mundo sol lua sol mundo mundo e estrelas!';
const palavras = frase.split(" ");
const palavrasUnicas = [];

for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i];
    let valida = false;

    for (let j = 0; j < palavras.length; j++) {
        if (palavrasUnicas[j] === palavra) {
          valida = true;
          break;
        }
    }

    if (!valida) {
        palavrasUnicas.push(palavra);
    }
}

console.log(palavrasUnicas);