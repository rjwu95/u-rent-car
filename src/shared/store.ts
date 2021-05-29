import { configureStore } from "@reduxjs/toolkit";
import contractReducer from "../contract/reducer";

export const store = configureStore({
  reducer: {
    contract: contractReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
