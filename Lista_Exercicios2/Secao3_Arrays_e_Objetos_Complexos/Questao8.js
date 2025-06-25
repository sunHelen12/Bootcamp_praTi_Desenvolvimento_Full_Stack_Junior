/**
 * 8. Agrupamento por Propriedade​
 * Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
 * cada chave é um cliente e o valor é a soma de todos os seus total.
 */

const vendas =[
    {cliente: 'Finn', total: 150},
    {cliente: 'Jake', total: 55},
    {cliente: 'Marceline', total: 350},
    {cliente: 'Princesa Jujuba', total: 534},
    {cliente: 'Jake', total: 437},
];

function agruparvendas(vendas){
    return vendas.reduce((acumulador, venda) =>{
        const { cliente, total } = venda;

        if(acumulador[cliente]){
            acumulador[cliente] += total;
        }else{
            acumulador[cliente] = total;
        }
        return acumulador;
    }, {});
}

const resultado = agruparvendas(vendas);
console.log(resultado);