import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LocationState = {
  drugstoreLocation: Promise<object> | null;
  myLocation: { lat: number; lng: number };
};

const initialState = {
  drugstoreLocation: null,
  myLocation: { lat: 37.5666103, lng: 126.9783882 },
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
      action: PayloadAction<{ lat: number; lng: number }>
    ) => {
      state.myLocation = action.payload;
    },
  },
});

export const { setDrugstoreLocation, setMyLocation, reset } = location.actions;
export default location.reducer;
