export const getMovies = async (search) => {
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=9c6ffce5&s=${search}`);
    const data = await response.json();
    const movies = data.Search;
    return movies.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }));
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching movies");
  }
}