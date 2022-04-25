import SearchForm from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/apiService';
import MoviesList from 'components/MovieList/MoviesList';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({});
  const param = searchParams.get('query');

  const handleSubmit = data => {
    setMovies([...data]);
    setSearchParams({ query: data });
  };

  useEffect(() => {
    getSearchMovie();
    if (param) {
      getSearchMovie(param).then(res => setMovies(res));
      setQuery(param);
    }
  }, [param]);

  return (
    <div>
      <h1>Search Movies</h1>
      <SearchForm handleOnSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </div>
  );
}