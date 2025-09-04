import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
        language: 'pt-BR',
    },
});

export const searchMovies = async (query, page = 1) => {
    const response = await api.get('/search/movie', {
        params: { query, page },
    });
    return response.data;
};

// Buscar detalhes de um filme pelo ID
export const getMovieDetails = async (movieId) => {  
  const response = await api.get(`/movie/${movieId}`, {
    params: { append_to_response: 'credits' },
  });
  return response.data;
};

// Buscar filmes populares
export const getPopularMovies = async (page = 1) => {
    const response = await api.get('/movie/popular', {
        params: { page },
    });
    return response.data;
};

// Buscar filmes em cartaz
export const getNowPlayingMovies = async (page = 1) => {
    const response = await api.get('/movie/now_playing', {
        params: { page },
    });
    return response.data;
};

// Buscar filmes por gênero
export const getMoviesByGenre = async (genreId, page = 1) => {
    const response = await api.get('/discover/movie', {
        params: { with_genres: genreId, page },
    });
    return response.data;
};

// Buscar lista de gêneros
export const getGenres = async () => {
    const response = await api.get('/genre/movie/list');
    return response.data.genres;
};

