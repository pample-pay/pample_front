import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

const axiosApi = (url: string) => {
  const instance = axios.create({ baseURL: url });
  return instance;
};

const axiosAuthApi = (url: string) => {
  const token = "";
  const instance = axios.create({ baseURL: url, headers: {} });
};

export const defaultInstance = axiosApi(baseUrl);
export const authInstance = axiosAuthApi(baseUrl);
