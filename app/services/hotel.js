import { makeApiRequest } from "./requestFactory";
const baseRoute = "hotels";
export const getHotelsByCity = async (city) => {
  return makeApiRequest(baseRoute + "/by-city/" + city, "get");
};
