package exercicio_5.model;
import java.math.BigDecimal;

import exercicio_5.exceptions.*;

public class CartaoCredito extends FormaPagamento {
    private String numeroCartao;

 public CartaoCredito(String numeroCartao) {
        this.numeroCartao = numeroCartao;
    }

    @Override
    public void validarPagamento() {
        if (numeroCartao == null || !numeroCartao.matches("\\d{16}")) {
            throw new PagamentoInvalidoException("Número de cartão inválido!");
        }
    }

    @Override
    public void processarPagamento(BigDecimal valor) {
        validarPagamento();
        System.out.println("Pagamento de R$" + valor + " realizado no cartão " + numeroCartao);
    }

}
