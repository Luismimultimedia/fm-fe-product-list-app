import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../pages/home/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
})