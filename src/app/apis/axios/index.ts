import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

const axiosApi = (url: string) => {
  const instance = axios.create({ baseURL: url });
  return instance;
};

const axiosAuthApi = (url: string) => {
  const token = ""; // 토큰을 설정해야 함
  const headers = { Authorization: `Bearer ${token}` }; // 헤더를 설정해야 함
  const instance = axios.create({ baseURL: url, headers });
  return instance;
};

export const defaultInstance = axiosApi(baseUrl);
export const authInstance = axiosAuthApi(baseUrl);
