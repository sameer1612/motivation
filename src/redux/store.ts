import { configureStore } from "@reduxjs/toolkit";
import motivationsReducer from "../redux/features/motivationSlice";

export const store = configureStore({
  reducer: {
    motivations: motivationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
