import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../services";

export const fetchIsabelle = createAsyncThunk(
  "isabelle/fetch",
  async ({ sell_price }) => {
    const res = await fetch(`${BASE_URL}/isabelle`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sell_price: parseFloat(sell_price) }),
    });
    return res.json();
  },
);

const isabelleSlice = createSlice({
  name: "isabelle",
  initialState: { data: null, loading: false, error: null },
  reducers: {
    resetIsabelle: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIsabelle.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchIsabelle.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchIsabelle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { resetIsabelle } = isabelleSlice.actions;
export default isabelleSlice.reducer;
