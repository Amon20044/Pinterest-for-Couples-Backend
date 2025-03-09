import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/slices/authSlice"; // Import the auth slice

export const store = configureStore({
  reducer: {
    auth: authReducer, // Add the auth slice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
