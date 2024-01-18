import React from "react";
import { useFlights } from "../contexts/FlightsContext";
import CustomerData from "./CustomerData";
import FlightList from "./FlightList";

const TicketSection = () => {
  const { isApproveTicket } = useFlights();
  return (
    <div className="row">
      {isApproveTicket ? <CustomerData /> : <FlightList />}
    </div>
  );
};

export default TicketSection;
