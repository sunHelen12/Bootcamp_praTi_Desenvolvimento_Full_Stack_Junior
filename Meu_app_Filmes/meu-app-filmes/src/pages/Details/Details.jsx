import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../api/tmdb'; // A função que busca os detalhes na API
import { useLocalStorage } from '../../hooks/useLocalStorage';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import './Details.css';

// URL base para as imagens do TMDB
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function Details() {
  // Captura o 'id' do filme da URL
  const { id } = useParams();

  //  Estados para gerenciar os dados, loading e erros
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //  Estado dos favoritos, vindo do nosso hook customizado
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  //  Efeito para buscar os dados do filme quando o componente montar ou o 'id' mudar
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError('Não foi possível carregar os detalhes do filme.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]); // O efeito roda novamente se o ID na URL mudar

  // Funções auxiliares para formatar os dados
  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const getDirector = () => {
    if (!movie?.credits?.crew) return 'Não informado';
    const director = movie.credits.crew.find(member => member.job === 'Director');
    return director ? director.name : 'Não informado';
  };

  //  Lógica para adicionar/remover dos favoritos
  const isFavorite = favorites.some(favMovie => favMovie.id === movie?.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      // Remove
      setFavorites(favorites.filter(favMovie => favMovie.id !== movie.id));
    } else {
      // Adiciona (apenas os dados essenciais para o card)
      const movieData = {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
      };
      setFavorites([...favorites, movieData]);
    }
  };

  //  Renderização condicional
  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!movie) return null;

  return (
    <div className="details-container">
      <div className="details-content">
        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={`Pôster de ${movie.title}`}
          className="details-poster"
        />
        <div className="details-info">
          <h1>{movie.title} ({movie.release_date.split('-')[0]})</h1>
          <p className="tagline">{movie.tagline}</p>
          
          <div className="info-block">
            <h3>Sinopse</h3>
            <p>{movie.overview}</p>
          </div>

          <div className="info-grid">
            <div><strong>Avaliação:</strong> {movie.vote_average.toFixed(1)} / 10</div>
            <div><strong>Duração:</strong> {formatRuntime(movie.runtime)}</div>
            <div><strong>Gêneros:</strong> {movie.genres.map(g => g.name).join(', ')}</div>
            <div><strong>Diretor:</strong> {getDirector()}</div>
          </div>

          <button onClick={handleToggleFavorite} className={`favorite-btn ${isFavorite ? 'remove' : 'add'}`}>
            {isFavorite ? '❤️ Remover dos Favoritos' : '🤍 Adicionar aos Favoritos'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;