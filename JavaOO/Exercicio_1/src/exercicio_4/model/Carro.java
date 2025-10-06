package exercicio_4.model;

public class Carro implements IMeioTransporte {
    private int velocidade = 0;
    private static final int VELOCIDADE_MAXIMA = 200;

    @Override
    public void acelerar() {
        if (velocidade >= VELOCIDADE_MAXIMA) {
            throw new IllegalStateException("Carro já está na velocidade máxima!");
        }
        velocidade += 10;
        System.out.println("Carro acelerando para " + velocidade + " km/h.");
    }

    @Override
    public void frear() {
        if (velocidade <= 0) {
            throw new IllegalStateException("Carro já está parado!");
        }
        velocidade -= 10;
        System.out.println("Carro freando para " + velocidade + " km/h.");
    }
    
    @Override public int getVelocidadeAtual() { return velocidade; }
}