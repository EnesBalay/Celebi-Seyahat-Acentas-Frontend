import { createContext, useContext, useEffect, useState } from "react";
import { getAllFlights } from "../services/flight";

const FlightsContext = createContext();

export const FlightsProvider = ({ children }) => {
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState();
  const [selectedHotel, setSelectedHotel] = useState();
  const [selectedRoom, setSelectedRoom] = useState();
  const [rooms, setRooms] = useState();
  const [hotels, setHotels] = useState();
  const [customerData, setCustomerData] = useState();
  const [isApproveTicket, setIsApproveTicket] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const allFlights = await getAllFlights();
      setFlights(allFlights.data);
    };

    fetchData();
  }, []);

  return (
    <FlightsContext.Provider
      value={{
        flights,
        selectedFlight,
        setSelectedFlight,
        selectedHotel,
        setSelectedHotel,
        selectedRoom,
        setSelectedRoom,
        rooms,
        setRooms,
        setHotels,
        hotels,
        customerData,
        setCustomerData,
        isApproveTicket,
        setIsApproveTicket,
      }}
    >
      {children}
    </FlightsContext.Provider>
  );
};

export const useFlights = () => {
  return useContext(FlightsContext);
};
