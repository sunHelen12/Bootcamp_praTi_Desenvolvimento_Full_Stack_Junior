SELECT
    c.data,
    SUM(ic.quantidade * ca.preco_unitario) AS faturamento_total_dia
FROM
    Comanda AS c
JOIN
    ItensComanda AS ic ON c.codigo = ic.codigo_comanda
JOIN
    Cardapio AS ca ON ic.codigo_cardapio = ca.codigo
GROUP BY
    c.data
ORDER BY
    c.data;