import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../services";

export const fetchGift = createAsyncThunk(
  "gift/fetch",
  async ({ species, personality, color }) => {
    const res = await fetch(`${BASE_URL}/gift-recommendation`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ species, personality, color }),
    });
    return res.json();
  },
);

const giftSlice = createSlice({
  name: "gift",
  initialState: { data: null, loading: false, error: null },
  reducers: {
    resetGift: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGift.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGift.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchGift.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { resetGift } = giftSlice.actions;
export default giftSlice.reducer;
