import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../services";

export const fetchShop = createAsyncThunk("shop/fetch", async (buy_price) => {
  const res = await fetch(BASE_URL);
  return res.json();
});

const shopSlice = createSlice({
  name: "shop",
  initialState: { data: null, loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShop.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchShop.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchShop.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default shopSlice.reducer;
