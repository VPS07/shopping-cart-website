import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productInCart: [],
  totalPrice: 0,
};

const cartDataSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (!state.productInCart.some((item) => item.id === action.payload.id)) {
        state.productInCart.push(action.payload);
        state.totalPrice += action.payload.price;
      } else {
        for (let i = 0; i < state.productInCart.length; i++) {
          if (state.productInCart[i].id === action.payload.id) {
            state.productInCart[i].quantity += 1;
            state.totalPrice += state.productInCart[i].price;
          }
        }
      }
    },
    removeFromCart: (state, action) => {
      for (let i = 0; i < state.productInCart.length; i++) {
        if (state.productInCart[i].id === action.payload) {
          if (state.productInCart[i].quantity == 1) {
            state.totalPrice -= state.productInCart[i].price;
            state.productInCart.splice(i, 1);
          } else {
            state.productInCart[i].quantity -= 1;
            state.totalPrice -= state.productInCart[i].price;
          }
        }
      }
    },
    emptyCart: (state) => {
      state.productInCart = [];
      state.totalPrice = 0;
    },
    addToPrice: (state, action) => {
      state.totalPrice += action.payload;
    },
    removeFromPrice: (state, action) => {
      state.totalPrice -= action.payload;
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartDataSlice.actions;

export default cartDataSlice.reducer;
