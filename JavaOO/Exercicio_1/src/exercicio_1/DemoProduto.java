import java.math.BigDecimal;
import model.Produto;

public class DemoProduto {
    public static void main(String[] args) {
        System.out.println("--- Criando produto válido ---");
        Produto notebook = new Produto("Notebook Gamer", new BigDecimal("7500.00"), 10);
        System.out.println("Produto criado: " + notebook);

        System.out.println("\n--- Alterando para valores válidos ---");
        notebook.setPreco(new BigDecimal("7250.50"));
        notebook.setQuantidadeEmEstoque(8);
        System.out.println("Produto atualizado: " + notebook);

        System.out.println("\n--- Tentando atribuições inválidas ---");

        try {
            notebook.setNome(""); 
        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao definir nome: " + e.getMessage());
        }

        try {
            notebook.setPreco(new BigDecimal("-100.00")); 
        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao definir preço: " + e.getMessage());
        }

        try {
            notebook.setQuantidadeEmEstoque(-5); 
        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao definir estoque: " + e.getMessage());
        }
        
        System.out.println("\nEstado final do produto: " + notebook);
    }
}