import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authAPI from "./api";

export const fetchLogin = createAsyncThunk(
  "auths/login",
  async (info, thunkAPI) => {
    const response = await authAPI.login(info);
    return response.data;
  }
);

export const fetchMe = createAsyncThunk("auths/getMe", async () => {
  const res = await authAPI.getMe();
  return res.data;
});

export function logoutReducer(state) {
  state.loading = "idle";
  localStorage.removeItem("token");
  state.entities = {};
}
