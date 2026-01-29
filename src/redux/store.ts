import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cart';
import wishlistSlice from './features/wishlist';
import productsSlice from './features/products';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishlistSlice,
    products: productsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch