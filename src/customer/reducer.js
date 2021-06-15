import { createAsyncThunk } from "@reduxjs/toolkit";
import * as customerAPI from "./api";

export const fetchCustomers = createAsyncThunk(
  "customers/fetchStatus",
  async (thunkAPI) => {
    const response = await customerAPI.getCustomers();
    return response.data;
  }
);
