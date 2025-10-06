package exercicio_8.model;

import java.math.BigDecimal;

public class Sedex implements CalculadoraFrete {
    public BigDecimal calcular(Pedido pedido) {
        return new BigDecimal("20.00");
    }
}
