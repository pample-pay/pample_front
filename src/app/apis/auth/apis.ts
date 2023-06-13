import { useMutation } from "@tanstack/react-query";
import { defaultInstance } from "../axios/index";
import { AxiosResponse } from "axios";

export default async function login(
  id: string,
  password: string
): Promise<AxiosResponse<any>> {
  return await defaultInstance.post("users/auth/", {
    user_id: id,
    password: password,
  });
}