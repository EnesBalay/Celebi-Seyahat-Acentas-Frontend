import React, { useEffect, useState } from "react";
import { useFlights } from "../contexts/FlightsContext";

const SelectedFlightInformation = () => {
  const {
    selectedHotel,
    selectedRoom,
    selectedFlight,
    rooms,
    hotels,
    customerData,
  } = useFlights();
  const [selectHotel, setSelectHotel] = useState();
  const [selectRoom, setSelectRoom] = useState();

  useEffect(() => {
    setSelectHotel(hotels?.find((hotel) => hotel._id === selectedHotel)?.name);
    setSelectRoom(rooms?.find((room) => room._id === selectedRoom)?.title);
  }, [selectedRoom]);
  return (
    <div className="col-12 col-md-4 card py-3 my-3 mx-auto">
      <h2 className="text-success">Seçilen Uçuş Bilgileri</h2>
      <p className="m-0">
        <b>Havayolu:</b> {selectedFlight.airline}
      </p>
      <p className="m-0">
        <b>Uçuş Numarası:</b> {selectedFlight.flightNumber}
      </p>
      <p className="m-0">
        <b>Kalkış Şehri:</b> {selectedFlight.departureCity}
      </p>
      <p className="m-0">
        <b>Varış Şehri:</b> {selectedFlight.arrivalCity}
      </p>
      <p className="m-0">
        <b>Kalkış Zamanı:</b>{" "}
        {new Date(selectedFlight.departureTime).toLocaleString()}
      </p>
      <p className="m-0">
        <b>Varış Zamanı:</b>{" "}
        {new Date(selectedFlight.arrivalTime).toLocaleString()}
      </p>
      <p className="m-0">
        <b>Süre:</b> {selectedFlight.duration} dakika
      </p>
      <p className="m-0">
        <b>Boş Koltuklar:</b> {selectedFlight.availableSeats}
      </p>
      <p className="m-0">
        <b>Bilet Fiyatı:</b> ${selectedFlight.ticketPrice.toFixed(2)}
      </p>
      {selectRoom && (
        <>
          <hr />
          <h4 className="text-primary">Otel Bilgileri</h4>
          <p className="m-0">
            <b>Otel:</b> {selectHotel}
          </p>
          <p className="m-0">
            <b>Oda:</b> {selectRoom}
          </p>
        </>
      )}
      {customerData && (
        <>
          <hr />
          <h4 className="text-primary">Bilet Sahibi</h4>
          <p className="m-0">
            <b>Ad Soyad:</b>{" "}
            {customerData.firstName + " " + customerData.lastName}
          </p>
          <p className="m-0">
            <b>E-Posta:</b> {customerData.email}
          </p>
          <p className="m-0">
            <b>Telefon:</b> {customerData.phone}
          </p>
          <p className="m-0">
            <b>TC Kimlik No:</b> {customerData.tcKimlik}
          </p>
          <p className="m-0">
            <b>Doğum Tarihi:</b> {customerData.birthDate}
          </p>
          <p className="m-0">
            <b>Cinsiyet:</b> {customerData.gender}
          </p>
        </>
      )}
    </div>
  );
};

export default SelectedFlightInformation;
