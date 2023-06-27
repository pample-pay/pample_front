import { defaultInstance } from "../index";
import { AxiosResponse } from "axios";

const mapMarkApi = async (
  mylat: number,
  mylng: number
): Promise<AxiosResponse<any>> => {
  return await defaultInstance.post("api/v1/map-data", {
    mylat: mylat,
    mylng: mylng,
  });
};

export default mapMarkApi;
