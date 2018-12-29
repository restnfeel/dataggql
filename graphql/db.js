import axios from "axios";

const GG_API_URL = "https://openapi.gg.go.kr";

export const stations = () => {
  const URL = `${GG_API_URL}/BusStation?KEY=${
    process.env.GG_KEY
  }&type=json&SIGUN_CD=41500`;

  return axios.get(URL).then(res => {
    return res.data.BusStation[1].row;
  });
};
