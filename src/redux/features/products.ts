import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts as fetchProductsApi } from "@/services/products-api";
import type { IProduct } from "@/types/product-d-t";

interface ProductsState {
  products: IProduct[];
  total: number;
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  total: 0,
  loading: false,
  error: null,
};

/** Fetch products from API (allowed categories only) and store in global state. */
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchProductsApi();
    } catch (e) {
      return rejectWithValue(e instanceof Error ? e.message : "Failed to fetch products");
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: { payload: IProduct[] }) => {
      state.products = action.payload;
    },
    clearProductsError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.total = action.payload.total;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) ?? "Failed to load products";
      });
  },
});

export const { setProducts, clearProductsError } = productsSlice.actions;
export default productsSlice.reducer;
