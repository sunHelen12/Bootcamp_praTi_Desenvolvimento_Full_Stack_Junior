package exercicio_8.model;

import java.math.BigDecimal;

public class Pedido {
    private final String cepDestino;
    private final BigDecimal valorTotal;
    private CalculadoraFrete estrategia;

    public Pedido(String cepDestino, BigDecimal valorTotal, CalculadoraFrete estrategia) {
        if (!cepDestino.matches("\\d{8}")) throw new IllegalArgumentException("CEP inválido!");
        this.cepDestino = cepDestino;
        this.valorTotal = valorTotal;
        this.estrategia = estrategia;
    }

    public BigDecimal calcularFrete() {
        return estrategia.calcular(this);
    }

    public void setEstrategia(CalculadoraFrete estrategia) {
        this.estrategia = estrategia;
    }

    public BigDecimal getValorTotal() { return valorTotal; }
    public String getCepDestino() { return cepDestino; }
}
