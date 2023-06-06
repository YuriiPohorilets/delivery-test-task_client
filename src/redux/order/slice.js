import { createSlice } from '@reduxjs/toolkit';
import { createOrder } from './operations';

const initialState = {
  orders: [],
  isLoading: false,
  error: null,
};

export const orderSlice = createSlice({
  name: 'orders',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(createOrder.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.isLoading = false;
        state.error = null;
      }),
});

export const orderReducer = orderSlice.reducer;
