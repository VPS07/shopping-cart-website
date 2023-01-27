import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  products: [],
  filterData: [],
};

//createasyncthunk function is used to fetch data from api
export const fetchProductData = createAsyncThunk("/", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
});

//extra reducer used to
const productDataSlice = createSlice({
  name: "product data",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProductData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchProductData.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
  },
  reducers: {
    searchData: (state, action) => {
      state.filterData = state.products.filter((el) => {
        if (action.payload === "") return el;
        else {
          return (
            el.title.toLowerCase().includes(action.payload) ||
            el.description.toLowerCase().includes(action.payload)
          );
        }
      });
    },
  },
});

export const { searchData } = productDataSlice.actions;
export default productDataSlice.reducer;
