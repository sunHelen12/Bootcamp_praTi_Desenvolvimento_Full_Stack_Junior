# ☕ Cafeteria BomGosto - Sistema de Comandas

Este repositório contém os scripts SQL para a criação, gerenciamento e consulta do sistema de vendas da Cafeteria BomGosto. O objetivo é controlar as vendas de café por meio de comandas, gerenciando um cardápio e os itens vendidos.

## 📝 Descrição do Problema

A Cafeteria BomGosto precisa de um sistema para registrar suas vendas. O controle é feito por comandas.

- Uma **Comanda** tem um código único, data, número da mesa e nome do cliente.
    
- O **Cardápio** lista os cafés disponíveis, com nome único, descrição e preço unitário.
    
- Os **Itens da Comanda** ligam uma comanda a vários cafés do cardápio, registrando a quantidade de cada café pedido. O mesmo café (mesmo código de cardápio) não pode ser inserido mais de uma vez na mesma comanda.
    

## 📊 Modelo do Banco de Dados

O banco de dados é composto por três tabelas principais:

### 1\. `Cardapio`

Armazena todos os cafés que a cafeteria oferece.

- `codigo` (SERIAL, PRIMARY KEY): Identificador único do café.
    
- `nome` (VARCHAR, UNIQUE): Nome do café (ex: "Espresso", "Cappuccino").
    
- `descricao` (TEXT): Composição do café.
    
- `preco_unitario` (DECIMAL): Valor de uma unidade do café.
    

### 2\. `Comanda`

Registra cada pedido (comanda) feito por um cliente.

- `codigo` (SERIAL, PRIMARY KEY): Identificador único da comanda.
    
- `data` (DATE): Data em que a comanda foi aberta.
    
- `numero_mesa` (INT): Número da mesa do cliente.
    
- `nome_cliente` (VARCHAR): Nome do cliente.
    

### 3\. `ItensComanda`

Tabela associativa que detalha o que foi pedido em cada comanda.

- `codigo_comanda` (INT, FOREIGN KEY): Refere-se à `Comanda(codigo)`.
    
- `codigo_cardapio` (INT, FOREIGN KEY): Refere-se ao `Cardapio(codigo)`.
    
- `quantidade` (INT): Quantidade pedida daquele item do cardápio.
    
- *(CHAVE PRIMÁRIA COMPOSTA: `(codigo_comanda, codigo_cardapio)`)*
    

## 🚀 Scripts SQL

Os arquivos SQL estão divididos da seguinte forma:

### 1\. Scripts de Criação (DDL)

[1. Scripts de Criação](Scripts%20_de_Criacao.sql)

[2. Scripts de Inserção](./Scripts%20_de_Insercao.sql)

[3. Listagem do cardápio ordenada por nome](./01_Listagem_Cardapio_Nome.sql)

[4. Listagem detalhada das comandas e seus itens](02_Comandas_Ordenadas_Data_Codigo.sql)

[5. Listagem das comandas com o valor total de cada uma](03_Listagem_Comandas_Valor_Total.sql)

[6. Listagem das comandas (com valor total) que possuem mais de um tipo de café](04_Comandas_Com_de_Cafe.sql)

[7. Total de faturamento por data](05_Faturamento_Por_Data.sql)