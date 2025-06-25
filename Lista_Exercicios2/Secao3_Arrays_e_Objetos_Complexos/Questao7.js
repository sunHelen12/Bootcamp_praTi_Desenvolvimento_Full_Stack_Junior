/**
 * 7. Mapeamento e Ordenação​
 * Dado um array produtos = [{ nome, preco }, ...], crie uma função que
 * retorne um novo array apenas com os nomes, ordenados por preço
 * crescente, usando map, sort.
 */

const produtos = [
    { nome: 'Teclado Gamer', preco: 165.00 },
    { nome: 'Pendrive', preco: 80.90 },
    { nome: 'Cadeira Gamer', preco: 823.00 },
    { nome: 'Headphone', preco: 296.00 }
];


function nomesOrdenadosPreco(produtos) {
    return produtos
        .slice()
        .sort((a, b) => a.preco - b.preco)
        .map(produtos => produtos.nome);
}

const nomes = nomesOrdenadosPreco(produtos);
console.log(nomes);