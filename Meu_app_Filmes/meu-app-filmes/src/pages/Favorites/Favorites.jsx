import React from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import MovieCard from '../../components/MovieCard/MovieCard';
import './Favorites.css';

function Favorites() {
  const [favorites] = useLocalStorage('favorites', []);

  return (
    <div className="favorites-container">
      <h2>Meus Filmes Favoritos</h2>     
      {favorites.length > 0 ? (
        <div className="favorites-list">
          {favorites.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty-favorites">
          <p>Sua lista de favoritos está vazia.</p>
          <p>Adicione filmes clicando no botão "Adicionar aos Favoritos" na página de detalhes de um filme.</p>
        </div>
      )}
    </div>
  );
}

export default Favorites;