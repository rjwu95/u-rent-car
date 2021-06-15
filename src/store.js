import { configureStore, createSlice } from "@reduxjs/toolkit";
import { fetchLogin, fetchMe, logoutReducer } from "./auth/authReducer";
import contract from "./contract/contractReducer";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    entities: {},
    loading: "idle",
  },
  reducers: {
    logout: logoutReducer,
  },
  extraReducers: {
    [fetchLogin.pending]: (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    [fetchLogin.fulfilled]: (state, action) => {
      state.loading = "fulfilled";
      sessionStorage.setItem("token", action.payload.token);
      state.entities = action.payload;
    },
    [fetchMe.fulfilled]: (state, action) => {
      state.entities = action.payload;
    },
  },
});

export const { logout } = authSlice.reducer;

export const store = configureStore({
  reducer: {
    contract,
    auth: authSlice.reducer,
  },
});
