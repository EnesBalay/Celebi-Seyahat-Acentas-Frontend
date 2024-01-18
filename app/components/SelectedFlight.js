import { useEffect, useState } from "react";
import { useFlights } from "../contexts/FlightsContext";
import { getHotelsByCity } from "../services/hotel";
import HotelAndRoomSelection from "./HotelAndRoomSelection";
import Link from "next/link";
import SelectedFlightInformation from "./SelectedFlightInformation";

const SelectedFlight = () => {
  const { selectedFlight, hotels, setHotels, setIsApproveTicket } =
    useFlights();

  const fetchData = async () => {
    const hotels = await getHotelsByCity(
      selectedFlight.arrivalCity.replace(/[^\x00-\x7F]/g, "")
    );
    setHotels(hotels.data);
  };
  useEffect(() => {
    fetchData();
  }, [selectedFlight]);

  if (!selectedFlight) {
    return null; // Seçili uçuş yoksa, null döndür ve hiçbir şey gösterme
  }
  return (
    <div className="my-4">
      <div className="row">
        <SelectedFlightInformation />
        <div className="col-12 col-md-8">
          <HotelAndRoomSelection />
        </div>
      </div>
      <div className="row">
        <button
          onClick={() => setIsApproveTicket(true)}
          className="btn btn-success my-3"
        >
          {" "}
          İleri
        </button>
      </div>
    </div>
  );
};

export default SelectedFlight;
