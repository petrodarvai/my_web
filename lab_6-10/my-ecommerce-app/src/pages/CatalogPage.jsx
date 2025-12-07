import React from 'react';
import MovieCard from '../components/MovieCard';
import MOVIES from '../data'; 

const CatalogPage = () => {
  return (
    <section className="catalog-page-content">
      
      {}
      <div className="catalog-controls">
        
        {}
        <div className="filter-dropdowns">
          {}
          <select disabled className="filter-select">
            <option>Filter 1 (Genre)</option>
          </select>

          {}
          <select disabled className="filter-select">
            <option>Filter 2 (Rating)</option>
          </select>

          {}
          <select disabled className="filter-select">
            <option>Filter 3 (Duration)</option>
          </select>
        </div>

        {}
        <div className="search-and-apply">
            <input type="text" placeholder="Search..." disabled className="search-input" />
            <button disabled className="apply-button">Apply</button>
        </div>
      </div>

      <h2>Movie Library</h2>
      
      {}
      <div className="product-list-grid">
        {MOVIES.map(movie => (
          <MovieCard key={movie.id} movie={movie} /> 
        ))}
      </div>
    </section>
  );
};

export default CatalogPage;