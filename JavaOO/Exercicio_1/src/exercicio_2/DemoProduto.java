import model.Produto;
import java.math.BigDecimal;

public class DemoProduto {

    public static void main(String[] args) {
        // Criação de uma instância de Produto
        System.out.println("--- Cenário Inicial ---");
        Produto smartphone = new Produto("Smartphone Pro X", new BigDecimal("4000.00"), 20);
        System.out.println("Produto criado: " + smartphone);
        System.out.println("Preço original: " + smartphone.getPreco());

        //  Demonstração de um desconto válido
        System.out.println("\n--- Aplicando um desconto válido de 10% ---");
        try {
            smartphone.aplicarDesconto(10.0);
            System.out.println("Desconto aplicado com sucesso!");
            System.out.println("Novo preço: " + smartphone.getPreco());
        } catch (IllegalArgumentException e) {
            // Este bloco não deve ser executado em um cenário de sucesso
            System.out.println("Erro inesperado ao aplicar desconto válido: " + e.getMessage());
        }

        // Tentativa de aplicar um desconto inválido 
        System.out.println("\n--- Tentando aplicar um desconto inválido de 70% ---");
        try {
            smartphone.aplicarDesconto(70.0);
            // Esta linha não será executada se a exceção for lançada
            System.out.println("O preço foi alterado para: " + smartphone.getPreco());
        } catch (IllegalArgumentException e) {
            System.out.println("Erro capturado como esperado: " + e.getMessage());
            System.out.println("O preço do produto não foi alterado: " + smartphone.getPreco());
        }

        // Tentativa de aplicar um desconto inválido
        System.out.println("\n--- Tentando aplicar um desconto inválido de -5% ---");
        try {
            smartphone.aplicarDesconto(-5.0);
             // Esta linha não será executada se a exceção for lançada
            System.out.println("O preço foi alterado para: " + smartphone.getPreco());
        } catch (IllegalArgumentException e) {
            System.out.println("Erro capturado como esperado: " + e.getMessage());
            System.out.println("O preço do produto não foi alterado: " + smartphone.getPreco());
        }

        System.out.println("\n--- Estado final do produto ---");
        System.out.println(smartphone);
    }
}