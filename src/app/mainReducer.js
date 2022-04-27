import {
  INCREMENT,
  DECREMENT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CART_SEEN,
} from "./actions";
import { initialStore } from "./store";

export const mainReducer = (state = initialStore, action) => {
  switch (action.type) {
    case CART_SEEN:
      return {
        ...state,
        cartSeen: true,
      };
    case ADD_TO_CART:
      return {
        ...state,
        addToCart: true,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        addToCart: false,
      };
    case INCREMENT:
      return {
        ...state,
        amount: state.amount + 1,
      };
    case DECREMENT:
      if (state.amount > 0) {
        return {
          ...state,
          amount: state.amount - 1,
        };
      }
      return {
        ...state,
      };
    default:
      return state;
  }
};
