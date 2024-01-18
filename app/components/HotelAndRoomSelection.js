// components/HotelAndRoomSelection.js
import React, { useState, useEffect } from "react";
import { useFlights } from "../contexts/FlightsContext";
import { getRoomsByHotel } from "../services/room";

const HotelAndRoomSelection = () => {
  const {
    flights,
    selectedHotel,
    setSelectedHotel,
    selectedRoom,
    setSelectedRoom,
    selectedFlight,
    rooms,
    hotels,
    setHotels,
    setRooms,
  } = useFlights();
  const handleHotelChange = async (hotelID) => {
    // Oteli seç
    setSelectedHotel(hotelID);
    // Seçilen otelin odalarını getir
    const rooms = await getRoomsByHotel(hotelID);
    setRooms(rooms.data); // Bu, dönen odaların yapısına bağlı olarak güncellenmelidir
  };
  const handleRoomSelect = (roomID) => {
    setSelectedRoom(roomID);
  };

  return (
    <div>
      <h2>Otel ve Oda Seçimi</h2>

      {/* Otelleri seçmek için dropdown */}
      <div>
        <label>Otel Seç:</label>
        <select
          value={selectedHotel}
          onChange={(e) => handleHotelChange(e.target.value)}
          className="form-control mb-3"
        >
          <option value="">Otel Seç</option>
          {hotels?.map((hotel) => (
            <option key={hotel._id} value={hotel._id}>
              {hotel.name}
            </option>
          ))}
        </select>
      </div>

      {/* Seçilen otelin odalarını göster */}
      {selectedHotel && (
        <div>
          {selectedRoom ? (
            <>
              <button
                className="btn btn-warning"
                onClick={() => setSelectedRoom(null)}
              >
                Odayı İptal Et
              </button>
            </>
          ) : (
            <>
              <h3 className="alert alert-info">{`Seçilen Otel: ${
                hotels?.find((hotel) => hotel._id === selectedHotel)?.name || ""
              }`}</h3>
              <div>
                <h2>Oda Seçimi</h2>
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Oda</th>
                      <th>Kapasite</th>
                      <th>Seç</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rooms?.map((room) => (
                      <tr key={room._id}>
                        <td>{room.title}</td>
                        <td>{room.maxPeople}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => handleRoomSelect(room._id)}
                          >
                            Seç
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default HotelAndRoomSelection;
