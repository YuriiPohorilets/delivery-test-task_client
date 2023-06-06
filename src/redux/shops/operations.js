import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://vast-lime-duckling-boot.cyclic.app/api/';

export const getShops = createAsyncThunk('shops/getShops', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('/shops');

    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getProducts = createAsyncThunk(
  'shops/getProducts',
  async (shopId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/shops/${shopId}`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
