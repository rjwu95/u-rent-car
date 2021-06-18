import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authAPI from "./api";

export const fetchLogin = createAsyncThunk(
  "auths/login",
  async (info, { rejectWithValue }) => {
    try {
      const response = await authAPI.login(info);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchMe = createAsyncThunk(
  "auths/getMe",
  async (_, { rejectWithValue }) => {
    try {
      const res = await authAPI.getMe();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export function logoutReducer(state) {
  state.loading = "idle";
  sessionStorage.removeItem("token");
  state.entities = {};
}
