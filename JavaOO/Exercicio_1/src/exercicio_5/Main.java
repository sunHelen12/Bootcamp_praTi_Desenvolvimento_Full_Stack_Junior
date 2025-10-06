package exercicio_5;
import java.math.BigDecimal;

import exercicio_5.model.*;

public class Main {
    public static void main(String[] args) {
        FormaPagamento f1 = new CartaoCredito("1234567812345678");
        FormaPagamento f2 = new Boleto("12345678901234567890123456789012345678901234567");
        FormaPagamento f3 = new Pix("meuemail@pix.com");

        f1.processarPagamento(new BigDecimal("100.00"));
        f2.processarPagamento(new BigDecimal("250.00"));
        f3.processarPagamento(new BigDecimal("50.00"));
    }
}
