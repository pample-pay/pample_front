import { authInstance, defaultInstance } from "../index";
import { AxiosResponse } from "axios";

export async function login(
  id: string,
  password: string
): Promise<AxiosResponse<any>> {
  return await defaultInstance.post("users/auth/", {
    user_id: id,
    password: password,
  });
}

export async function checkAccessToken(): Promise<AxiosResponse<any>> {
  const access = localStorage.getItem("access_token");
  return await authInstance(access).post("users/token/");
}

export async function refreshAccessToken(
  refresh: string
): Promise<AxiosResponse<any>> {
  return await defaultInstance.post("users/auth/refresh/", {
    refresh: refresh,
  });
}
