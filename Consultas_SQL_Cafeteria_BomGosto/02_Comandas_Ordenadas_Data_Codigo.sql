SELECT
    c.codigo AS codigo_comanda,
    c.data,
    c.numero_mesa,
    c.nome_cliente,
    ca.nome AS nome_cafe,
    ca.descricao,
    ic.quantidade,
    ca.preco_unitario,
    (ic.quantidade * ca.preco_unitario) AS preco_total_cafe
FROM
    Comanda AS c
JOIN
    ItensComanda AS ic ON c.codigo = ic.codigo_comanda
JOIN
    Cardapio AS ca ON ic.codigo_cardapio = ca.codigo
ORDER BY
    c.data,
    c.codigo,
    ca.nome;