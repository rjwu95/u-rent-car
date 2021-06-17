import { createAsyncThunk } from "@reduxjs/toolkit";
import * as staffAPI from "./api";

export const fetchStaffs = createAsyncThunk(
  "staffs/fetchStatus",
  async (thunkAPI) => {
    const response = await staffAPI.getStaffs();
    return response.data;
  }
);
