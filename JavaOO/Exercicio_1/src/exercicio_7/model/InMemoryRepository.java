package exercicio_7.model;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import exercicio_7.exceptions.EntidadeNaoEncontradaException;

public class InMemoryRepository<T extends Identificavel<ID>, ID> implements IRepository<T, ID> {
    private final Map<ID, T> banco = new HashMap<>();

    @Override
    public T salvar(T entidade) {
        banco.put(entidade.getId(), entidade);
        return entidade;
    }

    @Override
    public Optional<T> buscarPorId(ID id) {
        return Optional.ofNullable(banco.get(id));
    }

    @Override
    public List<T> listarTodos() {
        return List.copyOf(banco.values()); 
    }

    @Override
    public void remover(ID id) {
        if (!banco.containsKey(id)) {
            throw new EntidadeNaoEncontradaException("ID não encontrado: " + id);
        }
        banco.remove(id);
    }
}
