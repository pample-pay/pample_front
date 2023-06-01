import { createContext } from "react";

interface IGeolocationContext {
  drugstoreLocation?: Promise<object>;
  myLocation?: { latitude: number; longitude: number } | string;
}

export const GeolocationContext = createContext<IGeolocationContext>({});
