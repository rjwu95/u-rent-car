import { configureStore, createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "../car/reducer";
import { fetchLogin, fetchMe, logoutReducer } from "../auth/authReducer";
import { fetchCustomers } from "../customer/reducer";
import contract from "../contract/contractReducer";

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
    [fetchLogin.pending]: (state) => {
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

export const car = createSlice({
  name: "car",
  initialState: {
    entities: [],
    loading: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchCars.pending]: (state) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    [fetchCars.fulfilled]: (state, action) => {
      state.loading = "idle";
      state.entities = action.payload;
    },
  },
});
export const customer = createSlice({
  name: "customer",
  initialState: {
    entities: [],
    loading: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchCustomers.pending]: (state) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    [fetchCustomers.fulfilled]: (state, action) => {
      state.loading = "idle";
      state.entities = action.payload;
    },
  },
});

export const { logout } = authSlice.reducer;

export const store = configureStore({
  reducer: {
    contract,
    auth: authSlice.reducer,
    car: car.reducer,
    customer: customer.reducer,
  },
});
