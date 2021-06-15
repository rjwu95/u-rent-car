import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as contractAPI from "./api";

const initialState = {
  entities: [],
  loading: "idle",
};

export const fetchContracts = createAsyncThunk(
  "contracts/fetchStatus",
  async (thunkAPI) => {
    const response = await contractAPI.getContracts();
    return response.data;
  }
);

export const contract = createSlice({
  name: "contract",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchContracts.pending]: (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    [fetchContracts.fulfilled]: (state, action) => {
      state.loading = "idle";
      state.entities = action.payload;
    },
  },
});

export default contract.reducer;
