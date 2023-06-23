import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

const axiosApi = (url: string) => axios.create({ baseURL: url });

const axiosAuthApi = (url: string, token: string | null) =>
  axios.create({
    baseURL: url,
    headers: { Authorization: `Bearer ${token}` },
  });

export const defaultInstance = axiosApi(baseUrl);
export const authInstance = (token: string | null) =>
  axiosAuthApi(baseUrl, token);
