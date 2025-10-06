package exercicio_6.model;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.List;

public class Carrinho {
     private final List<ItemCarrinho> itens;

    public Carrinho(List<ItemCarrinho> itens) {
        this.itens = List.copyOf(itens); // imutável
    }

    public Carrinho adicionarItem(ItemCarrinho novo) {
        List<ItemCarrinho> copia = new ArrayList<>(itens);
        copia.add(novo);
        return new Carrinho(copia);
    }

    public Carrinho removerItem(Produto produto) {
        List<ItemCarrinho> copia = new ArrayList<>(itens);
        copia.removeIf(i -> i.getProduto().equals(produto));
        return new Carrinho(copia);
    }

    public Carrinho aplicarCupom(BigDecimal desconto) {
        if (desconto.compareTo(new BigDecimal("0.30")) > 0) {
            throw new IllegalArgumentException("Desconto máximo é 30%");
        }
        List<ItemCarrinho> copia = new ArrayList<>();
        for (ItemCarrinho item : itens) {
            BigDecimal precoComDesconto = item.getProduto().getPreco().getValor()
                    .multiply(BigDecimal.ONE.subtract(desconto))
                    .setScale(2, RoundingMode.HALF_EVEN);
            Produto p = new Produto(item.getProduto().getNome(), new Dinheiro(precoComDesconto, Moeda.BRL));
            copia.add(new ItemCarrinho(p, item.getQuantidade()));
        }
        return new Carrinho(copia);
    }

    public List<ItemCarrinho> getItens() { return itens; }
}
