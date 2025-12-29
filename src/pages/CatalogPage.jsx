import React, { useEffect, useMemo, useState } from 'react';
import MovieCard from '../components/MovieCard';
import Loader from '../components/Loader';
import { getMovies } from '../api/movies.api';

const CatalogPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    genre: 'All',
    rating: 'All',
    duration: 'All'
  });

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      const params = {};

      if (filters.genre !== 'All') {
        params.genre = filters.genre;
      }

      try {
        const data = await getMovies(params);
        setMovies(data);
      } catch (error) {
        console.error('Error loading movies', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [filters.genre]);

  const filteredMovies = useMemo(() => {
    const term = searchTerm.toLowerCase();

    return movies.filter(movie => {
      const matchesSearch =
        movie.title.toLowerCase().includes(term) ||
        movie.description.toLowerCase().includes(term) ||
        movie.director?.toLowerCase().includes(term);

      let matchesRating = true;
      if (filters.rating !== 'All') {
        matchesRating = movie.rating >= Number(filters.rating);
      }

      return matchesSearch && matchesRating;
    });
  }, [movies, searchTerm, filters.rating]);

  return (
    <section className="catalog-page-content">
      <div className="catalog-controls">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <select
          value={filters.genre}
          onChange={e => setFilters({ ...filters, genre: e.target.value })}
        >
          <option value="All">All genres</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>

        <select
          value={filters.rating}
          onChange={e => setFilters({ ...filters, rating: e.target.value })}
        >
          <option value="All">All ratings</option>
          <option value="8.5">8.5+</option>
          <option value="8.0">8.0+</option>
        </select>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <>
          <h2>Movie Library ({filteredMovies.length})</h2>
          <div className="product-list-grid">
            {filteredMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default CatalogPage;
