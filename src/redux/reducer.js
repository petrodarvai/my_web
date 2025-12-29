import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";

const initialState = {
  cart: []
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          movie => movie.id !== action.payload
        )
      };

    default:
      return state;
  }
};
