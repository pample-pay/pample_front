import { defaultInstance } from "../axios/index";
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

export async function checkToken(
  access: string,
  refresh: string
): Promise<AxiosResponse<any>> {
  return await defaultInstance.post("users/token/", {
    access: access,
    refresh: refresh,
  });
}
