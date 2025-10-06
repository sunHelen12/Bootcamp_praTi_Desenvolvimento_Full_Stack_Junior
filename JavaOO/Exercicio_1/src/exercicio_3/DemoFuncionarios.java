package exercicio_3;
import model.Funcionario;
import model.Gerente;
import model.Desenvolvedor;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class DemoFuncionarios {
    public static void main(String[] args) {
        // Criação dos funcionários
        Funcionario gerente = new Gerente("Ana Clara", new BigDecimal("12000.00"));
        Funcionario devSenior = new Desenvolvedor("João Pedro", new BigDecimal("9500.00"));
        Funcionario devJunior = new Desenvolvedor("Mariana Silva", new BigDecimal("5500.00"));

        // Adicionando a uma lista polimórfica
        List<Funcionario> equipe = new ArrayList<>();
        equipe.add(gerente);
        equipe.add(devSenior);
        equipe.add(devJunior);

        // Iterando e calculando o bônus de cada um
        System.out.println("--- Bônus dos Funcionários ---");
        for (Funcionario f : equipe) {
            String cargo = f instanceof Gerente ? "Gerente" : "Desenvolvedor";
            System.out.printf("Nome: %s, Cargo: %s, Bônus: R$%.2f%n",
                    f.getNome(), cargo, f.calcularBonus());
        }
    }
}