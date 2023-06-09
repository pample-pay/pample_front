import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./features/userLocation";
export const store = configureStore({
  reducer: {
    locationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
