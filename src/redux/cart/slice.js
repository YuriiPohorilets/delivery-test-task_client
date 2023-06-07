import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const productInCart = state.cart.find(product => product._id === action.payload._id);

      if (productInCart) {
        productInCart.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    removeProduct: (state, action) => {
      const removeproduct = state.cart.filter(product => product._id !== action.payload);

      state.cart = removeproduct;
    },

    incrementQuantity: (state, action) => {
      const product = state.cart.find(product => product._id === action.payload);

      product.quantity += 1;
    },

    decrementQuantity: (state, action) => {
      const product = state.cart.find(product => product._id === action.payload);

      if (product.quantity === 1) {
        product.quantity = 1;
      } else {
        product.quantity -= 1;
      }
    },

    clearCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, removeProduct, incrementQuantity, decrementQuantity, clearCart } =
  cartSlice.actions;
