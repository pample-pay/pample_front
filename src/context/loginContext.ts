import { createContext } from "react";

interface ILogin {
  isLogin: boolean;
}

export const LoginContext = createContext<ILogin>({ isLogin: false });
