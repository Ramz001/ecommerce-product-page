import { configureStore } from '@reduxjs/toolkit';
import { mainReducer } from './mainReducer';

export const initialStore = {
  price: 125,
  amount: 0,
  addToCart: false,
  cartSeen: false
}

export const store = configureStore({
  initialState: initialStore,
  reducer: {
    mainReducer
  },
});
