package exercicio_4.model;

public class Bicicleta implements IMeioTransporte {
    private int velocidade = 0;
    private static final int VELOCIDADE_MAXIMA = 30;
    
    @Override
    public void acelerar() {
        if (velocidade >= VELOCIDADE_MAXIMA) {
             throw new IllegalStateException("Bicicleta já está na velocidade máxima!");
        }
        velocidade += 2;
        System.out.println("Bicicleta acelerando para " + velocidade + " km/h.");
    }

    @Override
    public void frear() {
        if (velocidade <= 0) {
            throw new IllegalStateException("Bicicleta já está parada!");
        }
        velocidade -= 2;
        System.out.println("Bicicleta freando para " + velocidade + " km/h.");
    }
    
    @Override public int getVelocidadeAtual() { return velocidade; }
}
