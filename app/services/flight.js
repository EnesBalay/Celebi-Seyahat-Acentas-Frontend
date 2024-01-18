import { makeApiRequest } from "./requestFactory";
const baseRoute = "flight";
export const getAllFlights = async () => {
  return makeApiRequest(baseRoute, "get");
};

