import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const createOrder = createAsyncThunk('order/createOrder', async (order, thunkAPI) => {
  try {
    const { data } = await axios.post('/order', order);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
