import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Motivation } from "../../components/home";

export interface MotivationsState {
  value: Motivation[];
}

const initialState: MotivationsState = {
  value: [],
};

export const motivationsSlice = createSlice({
  name: "motivations",
  initialState,
  reducers: {
    init: (state, action: PayloadAction<Motivation[]>) => {
      state.value = action.payload;
    },
    create: (state, action: PayloadAction<Motivation>) => {
      state.value = [action.payload, ...state.value];
    },
    update: (state, action: PayloadAction<Motivation>) => {
      state.value = state.value.map((t) =>
        t.id === action.payload.id ? action.payload : t
      );
    },
    destroy: (state, action: PayloadAction<Motivation>) => {
      state.value = state.value.filter((t) => t.id !== action.payload.id);
    },
  },
});

export const { init, create, update, destroy } = motivationsSlice.actions;
export default motivationsSlice.reducer;
