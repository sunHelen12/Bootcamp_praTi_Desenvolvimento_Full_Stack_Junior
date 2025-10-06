package exercicio_5.model;
import java.math.BigDecimal;

import exercicio_5.exceptions.*;

public class Boleto extends FormaPagamento {
    private String codigoBarras;

    public Boleto(String codigoBarras) {
        this.codigoBarras = codigoBarras;
    }

    @Override
    public void validarPagamento() {
        if (codigoBarras == null || !codigoBarras.matches("\\d{47}")) {
            throw new PagamentoInvalidoException("Boleto inválido!");
        }
    }

    @Override
    public void processarPagamento(BigDecimal valor) {
        validarPagamento();
        System.out.println("Boleto de R$" + valor + " gerado: " + codigoBarras);
    }
}

