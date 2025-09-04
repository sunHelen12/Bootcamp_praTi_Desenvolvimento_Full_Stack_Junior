import React, { useState, useEffect } from 'react';
import { searchMovies } from '../../api/tmdb'; // Nossa função da API
import MovieCard from '../../components/MovieCard/MovieCard';
import Pagination from '../../components/Pagination/Pagination';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import './Search.css';

function Search() {
  // Estados para controlar o input, resultados e UI
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchedQuery, setSearchedQuery] = useState(''); // Guarda o termo que foi buscado

  // Função para lidar com a busca
  const handleSearch = async (pageToFetch = 1) => {
    if (!query.trim()) {
      setError('Por favor, digite um termo para buscar.');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const data = await searchMovies(query, pageToFetch);
      if (data.results.length === 0) {
        setError(`Nenhum resultado encontrado para "${query}".`);
        setMovies([]);
      } else {
        setMovies(data.results);
      }
      setCurrentPage(data.page);
      setTotalPages(data.total_pages);
      setSearchedQuery(query); // Atualiza o termo buscado
    } catch (err) {
      setError('Ocorreu um erro ao buscar os filmes. Tente novamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Lida com o clique no botão ou pressionar Enter
  const onSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch(1); // Sempre busca a primeira página ao iniciar uma nova busca
  };
  
  // Efeito para mudar de página
  useEffect(() => {
    // Se não houver um termo buscado, não faz nada
    if (!searchedQuery) {
      return;
    }
    
    // Busca a nova página para o mesmo termo que já foi pesquisado
    const fetchNewPage = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await searchMovies(searchedQuery, currentPage);
        setMovies(data.results);
      } catch (err) {
        setError('Ocorreu um erro ao mudar de página.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchNewPage();
  }, [currentPage]); // Roda apenas quando `currentPage` muda

  return (
    <div className="search-container">
      <h2>Busque por um Filme</h2>
      <form className="search-form" onSubmit={onSearchSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ex: Vingadores, O Poderoso Chefão..."
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </form>

      {/* Exibição condicional de loading, erro ou resultados */}
      {loading && <Loader />}
      {error && !loading && <ErrorMessage message={error} />}
      
      {movies.length > 0 && !error && (
        <>
          <div className="movie-list">
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage} // Passa a função para o componente filho
          />
        </>
      )}
    </div>
  );
}

export default Search;