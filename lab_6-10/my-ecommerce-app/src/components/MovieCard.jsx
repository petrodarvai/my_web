import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="product-card">
      <div className="card-image-placeholder">{movie.id}</div> {}
      
      <div className="card-body">
        <h3 className="card-title">{movie.title}</h3>
        
        {}
        <p className="card-description">
          {movie.description.substring(0, 100)}... 
        </p>

        {}
        <div className="card-footer-flex">
          <span className="card-price-label">Rating:</span>
          <span className="card-price-value">{movie.rating} </span>
          
          <button className="view-more-button-card" disabled>View more</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;