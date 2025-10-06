package model;
import java.math.BigDecimal;
import java.math.RoundingMode;

public class Produto {

    private String nome;
    private BigDecimal preco;
    private int quantidadeEmEstoque;

    /**
     * Construtor da classe Produto. Utiliza os setters para garantir
     * que os valores iniciais sejam válidos.
     *
     * @param nome Nome do produto (não pode ser nulo ou vazio).
     * @param preco Preço do produto (não pode ser negativo).
     * @param quantidadeEmEstoque Quantidade em estoque (não pode ser negativa).
     */
    public Produto(String nome, BigDecimal preco, int quantidadeEmEstoque) {
        // Usa os setters internos para garantir a validação na criação do objeto
        setNome(nome);
        setPreco(preco);
        setQuantidadeEmEstoque(quantidadeEmEstoque);
    }

    public String getNome() {
        return nome;
    }

    public BigDecimal getPreco() {
        return preco;
    }

    public int getQuantidadeEmEstoque() {
        return quantidadeEmEstoque;
    }

    public void setNome(String nome) {
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("O nome não pode ser nulo ou vazio.");
        }
        this.nome = nome;
    }

    public void setPreco(BigDecimal preco) {
        if (preco == null || preco.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("O preço não pode ser nulo ou negativo.");
        }
        this.preco = preco;
    }

    public void setQuantidadeEmEstoque(int quantidadeEmEstoque) {
        if (quantidadeEmEstoque < 0) {
            throw new IllegalArgumentException("A quantidade em estoque não pode ser negativa.");
        }
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
  
    /**
     * Aplica um desconto percentual ao preço do produto.
     * A porcentagem deve estar entre 0 e 50.
     *
     * @param porcentagem O percentual de desconto a ser aplicado.
     */
    public void aplicarDesconto(double porcentagem) {
        if (porcentagem < 0 || porcentagem > 50) {
            throw new IllegalArgumentException("A porcentagem de desconto deve estar entre 0 e 50.");
        }
        // Calcula o fator de desconto 
        BigDecimal fatorDesconto = BigDecimal.ONE.subtract(BigDecimal.valueOf(porcentagem / 100.0));
        
        // Aplica o desconto e arredonda para 2 casas decimais
        this.preco = this.preco.multiply(fatorDesconto).setScale(2, RoundingMode.HALF_UP);
    }
    
    /**
     * Retorna uma representação em String do objeto Produto.
     *
     * @return Uma string formatada com os dados do produto.
     */
    @Override
    public String toString() {
        return String.format("Produto{nome='%s', preco=R$ %.2f, estoque=%d}",
                nome, preco, quantidadeEmEstoque);
    }
}