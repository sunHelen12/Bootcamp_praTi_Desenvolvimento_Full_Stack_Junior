INSERT INTO Cardapio (nome, descricao, preco_unitario)
VALUES
    ('Espresso', 'Café puro intenso', 5.00),
    ('Cappuccino', 'Café, leite vaporizado e chocolate', 8.50),
    ('Latte', 'Café com mais leite vaporizado', 7.00),
    ('Mocha', 'Café, chocolate e leite', 9.00),
    ('Affogato', 'Espresso com sorvete de creme', 12.00);

INSERT INTO Comanda (data, numero_mesa, nome_cliente)
VALUES
    ('2025-10-26', 5, 'Ana Silva'),
    ('2025-10-26', 2, 'Bruno Costa'),
    ('2025-10-27', 5, 'Ana Silva'),
    ('2025-10-27', 3, 'Carlos Dias');

INSERT INTO ItensComanda (codigo_comanda, codigo_cardapio, quantidade)
VALUES
    (1, 1, 2), 
    (1, 2, 1),     
    
    (2, 3, 1), 
    
    (3, 1, 1), 
    
    (4, 2, 1), 
    (4, 4, 1), 
    (4, 5, 2); 