import { makeApiRequest } from "./requestFactory";
const baseRoute = "room";
export const getRoomsByHotel = async (hotelID) => {
  return makeApiRequest(baseRoute + "/" + hotelID, "get");
};
