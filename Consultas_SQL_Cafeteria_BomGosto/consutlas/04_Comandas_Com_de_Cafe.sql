SELECT
    c.codigo,
    c.data,
    c.numero_mesa,
    c.nome_cliente,
    SUM(ic.quantidade * ca.preco_unitario) AS valor_total_comanda
FROM
    Comanda AS c
JOIN
    ItensComanda AS ic ON c.codigo = ic.codigo_comanda
JOIN
    Cardapio AS ca ON ic.codigo_cardapio = ca.codigo
GROUP BY
    c.codigo,
    c.data,
    c.numero_mesa,
    c.nome_cliente
HAVING
    COUNT(ic.codigo_cardapio) > 1
ORDER BY
    c.data;