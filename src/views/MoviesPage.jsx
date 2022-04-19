import SearchForm from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/apiService';
import MoviesList from 'components/MovieList/MoviesList';
import { toast } from 'react-toastify';


export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({});
  const param = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    // setSearchParams({ query });
    // getSearchMovie(query).then(res => setMovies(res));
        const searchQuery = e.target.elements.query.value.trim();

        if (!searchQuery) {
          toast('Empty request!', { position: 'top-center' });
          setSearchParams('');
          return;
      }
      setSearchParams({ param: searchQuery });
      e.currentTarget.reset();
    };


  useEffect(() => {
    if (param) {
      getSearchMovie(param).then(res => setMovies(res));
      setQuery(param);
    }
  }, [param]);

  
  const handleSetQuery = e => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <h1>Search Movies</h1>
      <SearchForm
        handleSetQuery={handleSetQuery}
        handleSubmit={handleSubmit}
        value={query}
      />
      <MoviesList movies={movies} />
    </div>
  );
}