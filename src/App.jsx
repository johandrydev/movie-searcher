import { useState } from 'react';
import { Movies } from './components/Movies.jsx';
import { useMovies } from './hooks/useMovies.js';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const { movies, searchMovies } = useMovies();

  const handleSubmit = (event) => {
    event.preventDefault();
    searchMovies(search);
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <>
      <header>
        <h1>Movie Searcher</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            placeholder='The Matrix, Star Wars, Shrek...'
            type='text'
            value={search}
          />
          <button type='submit'>Search</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </>
  )
}

export default App
