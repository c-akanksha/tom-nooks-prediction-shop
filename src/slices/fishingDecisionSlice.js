import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../services";

export const fetchFishingDecision = createAsyncThunk(
  "fishingDecision/fetch",
  async ({ shadow, location, spawn_rate }) => {
    const res = await fetch(`${BASE_URL}/fishing-decision`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ shadow, location, spawn_rate }),
    });
    return res.json();
  },
);

const fishingDecisionSlice = createSlice({
  name: "gift",
  initialState: { data: null, loading: false, error: null },
  reducers: {
    resetDecision: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFishingDecision.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFishingDecision.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFishingDecision.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetDecision } = fishingDecisionSlice.actions;
export default fishingDecisionSlice.reducer;
