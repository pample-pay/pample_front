import { createContext } from "react";

interface IGeolocationContext {
  drugstoreLocation?: Promise<object> | string;
  myLocation?: { latitude: number; longitude: number } | string;
}

export const geolocationContext = createContext<IGeolocationContext>({});
