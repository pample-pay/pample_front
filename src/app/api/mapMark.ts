import axios from "axios";

const mapMark = async (mylat: number, mylng: number): Promise<object> => {
  const response = await axios.post("http://ilium.co.kr/api/v1/map-data", {
    mylat: mylat,
    mylng: mylng,
  });
  return response.data;
};

export default mapMark;
