import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";

const API_URL = "http://localhost:3001";

const MoviePage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/movies/${movieId}`)
      .then(res => setMovie(res.data))
      .catch(() => setMovie(null))
      .finally(() => setLoading(false));
  }, [movieId]);

  if (loading) return <Loader />;

  if (!movie) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>404 - Film Not Found</h1>
        <button onClick={() => navigate("/catalog")}>
          Go to Catalog
        </button>
      </div>
    );
  }

  return (
    <div className="movie-page-content" style={{ padding: "20px" }}>
      <button onClick={() => navigate("/catalog")}>
        ← Back to Catalog
      </button>

      <h1>{movie.title} ({movie.year})</h1>

      <p><b>Genre:</b> {movie.genre}</p>
      <p><b>Director:</b> {movie.director}</p>
      <p><b>Rating:</b> {movie.rating}</p>
      <p><b>Duration:</b> {movie.duration} min</p>

      <hr />
      <p>{movie.description}</p>
    </div>
  );
};

export default MoviePage;
