CREATE TABLE Cardapio (
    codigo SERIAL PRIMARY KEY,
    nome VARCHAR(100) UNIQUE NOT NULL,
    descricao TEXT,
    preco_unitario DECIMAL(10, 2) NOT NULL
);

CREATE TABLE Comanda (
    codigo SERIAL PRIMARY KEY,
    data DATE NOT NULL,
    numero_mesa INT,
    nome_cliente VARCHAR(150)
);

CREATE TABLE ItensComanda (
    codigo_comanda INT NOT NULL,
    codigo_cardapio INT NOT NULL,
    quantidade INT NOT NULL DEFAULT 1,
    PRIMARY KEY (codigo_comanda, codigo_cardapio),
    FOREIGN KEY (codigo_comanda) REFERENCES Comanda(codigo) ON DELETE CASCADE,
    FOREIGN KEY (codigo_cardapio) REFERENCES Cardapio(codigo)
);