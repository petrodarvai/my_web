import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <div className="movie-card" style={{ border: "1px solid #ddd", padding: "15px" }}>
      <h3>{movie.title}</h3>
      <p><b>Year:</b> {movie.year}</p>
      <p><b>Genre:</b> {movie.genre}</p>
      <p><b>Rating:</b> {movie.rating}</p>

      <div style={{ marginTop: "10px" }}>
        <Link to={`/movie/${movie.id}`}>
          <button>Details</button>
        </Link>

        <button
          style={{ marginLeft: "10px" }}
          onClick={() => dispatch(addToCart(movie))}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
