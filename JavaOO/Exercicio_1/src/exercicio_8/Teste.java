package exercicio_8;

import java.math.BigDecimal;

import exercicio_8.model.Pac;
import exercicio_8.model.Pedido;
import exercicio_8.model.Sedex;

public class Teste {
    public static void main(String[] args) {
        Pedido pedido = new Pedido("12345678", new BigDecimal("200.00"), new Sedex());
        System.out.println("Frete Sedex: " + pedido.calcularFrete());

        pedido.setEstrategia(new Pac());
        System.out.println("Frete PAC: " + pedido.calcularFrete());

        pedido.setEstrategia(p -> p.getValorTotal().compareTo(new BigDecimal("150")) > 0
                ? BigDecimal.ZERO
                : new BigDecimal("15.00"));
        System.out.println("Frete Promocional: " + pedido.calcularFrete());
    }
}
