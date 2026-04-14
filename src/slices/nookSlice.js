import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../services";

export const fetchNook = createAsyncThunk(
  "nook/fetch",
  async ({ buy_price }) => {
    const res = await fetch(`${BASE_URL}/nook`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ buy_price: parseFloat(Number(buy_price)) }),
    });
    return res.json();
  },
);

const nookSlice = createSlice({
  name: "nook",
  initialState: { data: null, loading: false, error: null },
  reducers: {
    resetNook: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNook.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNook.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchNook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { resetNook } = nookSlice.actions;
export default nookSlice.reducer;
