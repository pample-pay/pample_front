import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LocationState = {
  drugstoreLocation: Promise<object> | null;
  myLocation: { latitude: number; longitude: number };
};

const initialState = {
  drugstoreLocation: null,
  myLocation: { latitude: 37.5666103, longitude: 126.9783882 },
} as LocationState;
export const location = createSlice({
  name: "location",
  initialState,
  reducers: {
    reset: () => initialState,
    setDrugstoreLocation: (state, action: PayloadAction<Promise<object>>) => {
      state.drugstoreLocation = action.payload;
    },
    setMyLocation: (
      state,
      action: PayloadAction<{ latitude: number; longitude: number }>
    ) => {
      state.myLocation = action.payload;
    },
  },
});

export const {
  setDrugstoreLocation,
  setMyLocation,

  reset,
} = location.actions;
export default location.reducer;
