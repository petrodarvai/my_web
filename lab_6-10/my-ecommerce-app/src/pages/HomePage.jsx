import React from 'react';
import MOVIES from '../data'; 

const HomePage = () => {
  const featuredMovies = MOVIES.slice(0, 3); 

  return (
    <section className="home-page-content">
      
      {}
      <div className="hero-section">
        <div className="hero-image-placeholder">X</div>
        <div className="hero-text">
          {}
          <h1>Welcome to the Ultimate Cinematic Database</h1>
          <p>This is your go-to source for detailed information on iconic films from various genres. Our collection tracks and presents essential data—from ratings and duration to a brief plot overview—for cinematic masterpieces like Inception, The Dark Knight, and The Shawshank Redemption.</p>
          <p>Explore our library based on entities from previous projects.</p>
        </div>
      </div>

      {}
      <div className="featured-section">
        <h2>Featured Films (Wireframe Tiles)</h2>
        
        <div className="featured-movie-cards">
            {}
            {featuredMovies.map((movie) => (
                <div key={movie.id} className="featured-movie-card">
                    <div className="tile-placeholder"></div>
                    {}
                    <h4>{movie.title} ({movie.rating})</h4>
                    <p>Genre: {movie.genre}</p>
                    <p>{movie.description.substring(0, 50)}...</p>
                </div>
            ))}
        </div>
        
        {}
        <button className="view-more-button" disabled>View more</button>
      </div>
    </section>
  );
};

export default HomePage;