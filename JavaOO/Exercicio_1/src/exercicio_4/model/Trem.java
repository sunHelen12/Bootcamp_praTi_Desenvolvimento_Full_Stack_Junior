package exercicio_4.model;

public class Trem implements IMeioTransporte {
    private int velocidade = 0;
    private static final int VELOCIDADE_MAXIMA = 300;

    @Override
    public void acelerar() {
        if (velocidade >= VELOCIDADE_MAXIMA) {
            throw new IllegalStateException("Trem já está na velocidade máxima!");
        }
        velocidade += 25;
        System.out.println("Trem acelerando para " + velocidade + " km/h.");
    }

    @Override
    public void frear() {
        if (velocidade <= 0) {
            throw new IllegalStateException("Trem já está parado!");
        }
        velocidade -= 25;
        System.out.println("Trem freando para " + velocidade + " km/h.");
    }
    
    @Override public int getVelocidadeAtual() { return velocidade; }
}