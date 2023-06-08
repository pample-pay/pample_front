import { defaultInstance } from "../axios/index";

const mapMarkApi = async (mylat: number, mylng: number): Promise<object> => {
  try {
    const { data } = await defaultInstance.post("api/v1/map-data", {
      mylat: mylat,
      mylng: mylng,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export default mapMarkApi;
