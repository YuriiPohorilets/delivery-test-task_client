import { createSlice } from '@reduxjs/toolkit';
import { getShops } from './operations';
import { logout } from 'redux/auth/operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const shopSlice = createSlice({
  name: 'shops',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(getShops.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getShops.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getShops.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })

      .addCase(logout.fulfilled, (state, action) => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      }),
});

export const shopReducer = shopSlice.reducer;
