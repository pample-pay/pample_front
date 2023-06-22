import { createContext } from "react";

interface ILogin {
  isLogin?: boolean;
  userId?: string;
  
}

export const GeolocationContext = createContext<ILogin>({ isLogin: false });
