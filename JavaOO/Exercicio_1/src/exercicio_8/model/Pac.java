package exercicio_8.model;

import java.math.BigDecimal;

public class Pac implements CalculadoraFrete {
    public BigDecimal calcular(Pedido pedido) {
        return new BigDecimal("10.00");
    }
}
