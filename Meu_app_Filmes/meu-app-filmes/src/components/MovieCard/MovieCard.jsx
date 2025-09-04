import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './MovieCard.css';

// URL base para as imagens do TMDB. Você pode configurar isso em um arquivo .env também.
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function MovieCard({ movie }) {
  // Uma imagem placeholder caso o filme não tenha um pôster
  const placeholderImage = 'https://via.placeholder.com/500x750?text=No+Image';
  const posterUrl = movie.poster_path 
    ? `${IMAGE_BASE_URL}${movie.poster_path}` 
    : placeholderImage;

  // Extrai apenas o ano da data de lançamento
  const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';

  return (
    // O Link envolve todo o card, tornando-o totalmente clicável
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img src={posterUrl} alt={`Pôster de ${movie.title}`} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <div className="info-details">
          <p>{releaseYear}</p>
          <p className="rating">
            <FaStar color="#f5c518" /> {movie.vote_average.toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;