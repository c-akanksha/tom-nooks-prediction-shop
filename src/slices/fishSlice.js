import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../services";

export const fetchFish = createAsyncThunk(
  "fish/fetch",
  async ({ shadow_size, location }) => {
    const res = await fetch(`${BASE_URL}/fish-price`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ shadow_size, location }),
    });
    return res.json();
  },
);

const fishSlice = createSlice({
  name: "fish",
  initialState: { data: null, loading: false, error: null },
  reducers: {
    resetFish: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFish.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFish.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFish.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetFish } = fishSlice.actions;
export default fishSlice.reducer;
