import { createAsyncThunk } from "@reduxjs/toolkit";
import * as carAPI from "./api";

export const fetchCars = createAsyncThunk(
  "cars/fetchStatus",
  async (thunkAPI) => {
    const response = await carAPI.getCars();
    return response.data;
  }
);
