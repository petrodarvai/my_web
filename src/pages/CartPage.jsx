import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions";

const CartPage = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalDuration = cart.reduce(
    (sum, movie) => sum + (movie.duration || 0),
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map(movie => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <button onClick={() => dispatch(removeFromCart(movie.id))}>
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <hr />
          <h3>Total duration: {totalDuration} minutes</h3>
        </>
      )}
    </div>
  );
};

export default CartPage;
