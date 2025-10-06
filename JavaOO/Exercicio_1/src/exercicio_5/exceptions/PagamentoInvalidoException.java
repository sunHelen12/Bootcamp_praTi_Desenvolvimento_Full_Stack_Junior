package exercicio_5.exceptions;

class PagamentoInvalidoException extends RuntimeException {
    public PagamentoInvalidoException(String msg) {
        super(msg);
    }
}
