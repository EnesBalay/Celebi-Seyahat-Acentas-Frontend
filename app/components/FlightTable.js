// components/FlightTable.js
import React from "react";

const FlightTable = ({ flights, onSelectFlight }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Havayolu</th>
          <th scope="col">Uçuş Numarası</th>
          <th scope="col">Kalkış Şehri</th>
          <th scope="col">Varış Şehri</th>
          <th scope="col">Kalkış Zamanı</th>
          <th scope="col">Varış Zamanı</th>
          <th scope="col">Süre</th>
          <th scope="col">Boş Koltuklar</th>
          <th scope="col">Bilet Fiyatı</th>
          <th scope="col">İşlemler</th>
        </tr>
      </thead>
      <tbody>
        {flights.map((flight) => (
          <tr key={flight._id}>
            <td>{flight.airline}</td>
            <td>{flight.flightNumber}</td>
            <td>{flight.departureCity}</td>
            <td>{flight.arrivalCity}</td>
            <td>{new Date(flight.departureTime).toLocaleString()}</td>
            <td>{new Date(flight.arrivalTime).toLocaleString()}</td>
            <td>{flight.duration} minutes</td>
            <td>{flight.availableSeats}</td>
            <td>${flight.ticketPrice.toFixed(2)}</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => onSelectFlight(flight)}
              >
                Select
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FlightTable;
