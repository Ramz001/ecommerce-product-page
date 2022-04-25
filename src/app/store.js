import { configureStore } from '@reduxjs/toolkit';

export const initialStore = {
  price: 125,
  amount: 0
}

export const store = configureStore({
  initialState: initialStore,
  reducer: {
    
  },
});
