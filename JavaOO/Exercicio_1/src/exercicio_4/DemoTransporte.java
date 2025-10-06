package exercicio_4;

import java.util.ArrayList;
import java.util.List;

import exercicio_4.model.Bicicleta;
import exercicio_4.model.Carro;
import exercicio_4.model.IMeioTransporte;
import exercicio_4.model.Trem;

public class DemoTransporte {
    public static void main(String[] args) {
        List<IMeioTransporte> veiculos = new ArrayList<>();
        veiculos.add(new Carro());
        veiculos.add(new Bicicleta());
        veiculos.add(new Trem());

        System.out.println("--- Acelerando todos os veículos ---");
        for (IMeioTransporte veiculo : veiculos) {
            try {
                veiculo.acelerar();
                veiculo.acelerar();
            } catch (IllegalStateException e) {
                System.out.println("Erro: " + e.getMessage());
            }
        }

        System.out.println("\n--- Freando todos os veículos ---");
        for (IMeioTransporte veiculo : veiculos) {
            try {
                veiculo.frear();
            } catch (IllegalStateException e) {
                System.out.println("Erro: " + e.getMessage());
            }
        }
        
        System.out.println("\n--- Tentando frear um veículo já parado ---");
        IMeioTransporte bike = new Bicicleta();
        try {
            bike.frear();
        } catch (IllegalStateException e) {
            System.out.println("Erro esperado capturado: " + e.getMessage());
        }
    }
}