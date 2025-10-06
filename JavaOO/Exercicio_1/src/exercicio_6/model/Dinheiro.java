package exercicio_6.model;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Objects;

public final class Dinheiro {
    private final BigDecimal valor;
    private final Moeda moeda;

    public Dinheiro(BigDecimal valor, Moeda moeda) {
        if (valor.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Valor não pode ser negativo");
        }
        this.valor = valor.setScale(2, RoundingMode.HALF_EVEN);
        this.moeda = moeda;
    }

    public BigDecimal getValor() { return valor; }
    public Moeda getMoeda() { return moeda; }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Dinheiro)) return false;
        Dinheiro d = (Dinheiro) o;
        return valor.equals(d.valor) && moeda == d.moeda;
    }

    @Override
    public int hashCode() {
        return Objects.hash(valor, moeda);
    }
}

}
