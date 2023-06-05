import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api/';

export const getShops = createAsyncThunk('shops/getShops', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('/shops');

    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
