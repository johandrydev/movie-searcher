import { useCallback, useState, useRef } from 'react';
import { getMovies } from '../services/getMovies';

export const useMovies = () => {
  const [movies, setMovies] = useState([]);

  const searchedMovie = useRef('');

  const searchMovies = useCallback(async (search) => {
    if (searchedMovie.current === search) return;
    try {
      const newMovies = await getMovies(search);
      searchedMovie.current = search;
      setMovies(newMovies);
    } catch (error) {
      setMovies([]);
    }
  }, []);

  return {
    movies,
    searchMovies
  }
}