import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as contractAPI from "./api";

// interface Car {}

// interface Staff {}

// interface Consumer {}

// interface Contract {
//   car: Car;
//   outer: Staff;
//   renter: Consumer;
//   driverId: Consumer;
//   departure: Date;
//   arrive: Date;
//   giveLocation: string;
//   carCheck: string;
//   initKm: number;
//   fee: number;
//   feeTable: string;
//   remark: string;
//   special: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

// export type Status = "idle" | "pending" | "fulfilled" | "rejected";

// interface ContractState {
//   entities: Contract[];
//   loading: Status;
// }

// // Define the initial state using that type
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

export const contractSlice = createSlice({
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

export default contractSlice.reducer;
