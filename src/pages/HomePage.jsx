import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';


const INITIAL_DISPLAY_COUNT = 3;
const INCREMENT_COUNT = 3;

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3001/movies');
        setTimeout(() => {
          setMovies(response.data);
          setLoading(false); 
        }, 500); 
      } catch (error) {
        console.error('Failed to load movies', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleViewMore = () => {
    setDisplayCount(prev =>
      Math.min(prev + INCREMENT_COUNT, movies.length)
    );
  };

  const hasMoreContent = displayCount < movies.length;
  const visibleMovies = movies.slice(0, displayCount);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="home-page-content">
      <div className="hero-section">
        <div className="hero-image-placeholder">X</div>
        <div className="hero-text">
          <h1>Welcome to the Ultimate Cinematic Database</h1>
          <p>
            This is your go-to source for detailed information on iconic films
            from various genres. Explore our library based on entities from
            previous projects.
          </p>
        </div>
      </div>

      <div className="featured-section">
        <h2>
          Featured Films ({visibleMovies.length} of {movies.length})
        </h2>

        <div className="featured-movie-cards">
          {visibleMovies.map((movie) => (
            <div key={movie.id} className="featured-movie-card">
              <div className="tile-placeholder"></div>
              <h4>{movie.title} ({movie.rating})</h4>
              <p>Genre: {movie.genre}</p>
              <p>{movie.description.substring(0, 50)}...</p>
              <Link to={`/movie/${movie.id}`}>View Details</Link>
            </div>
          ))}
        </div>

        {hasMoreContent && (
          <button
            onClick={handleViewMore}
            className="view-more-button"
            style={{ marginTop: '15px', padding: '10px 20px' }}
          >
            View {Math.min(INCREMENT_COUNT, movies.length - displayCount)} more films
          </button>
        )}
      </div>
    </section>
  );
};


export default HomePage;
