import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../services";

export const fetchVillager = createAsyncThunk(
  "villager/fetch",
  async ({ hobby }) => {
    const res = await fetch(`${BASE_URL}/villager-classifier`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hobby }),
    });
    return res.json();
  },
);

const villagerSlice = createSlice({
  name: "villager",
  initialState: { data: null, loading: false, error: null },
  reducers: {
    resetVillager: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVillager.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVillager.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchVillager.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { resetVillager } = villagerSlice.actions;
export default villagerSlice.reducer;
