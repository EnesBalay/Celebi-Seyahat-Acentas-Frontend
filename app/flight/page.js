"use client";
import { useEffect } from "react";
import FlightList from "../components/FlightList";
import LogoutBtn from "../components/LogoutBtn";
import LoginLayout from "../loginLayout";
import { useFlights } from "../contexts/FlightsContext";
import CustomerData from "../components/CustomerData";
import TicketSection from "../components/TicketSection";
export default function Page() {
  return (
    <LoginLayout>
      <div className="row">
        <div className="col-12">
          <TicketSection />
          <LogoutBtn />
        </div>
      </div>
    </LoginLayout>
  );
}
