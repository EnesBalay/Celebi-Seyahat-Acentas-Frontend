// pages/FlightList.js
import { useState, useEffect } from "react";
import Input from "../components/Input";
import FlightTable from "./FlightTable";
import { useFlights } from "../contexts/FlightsContext";
import SelectedFlight from "./SelectedFlight";

const FlightList = () => {
  const { flights, setSelectedFlight, selectedFlight, setCustomerData } =
    useFlights();
  const [filteredFlights, setFilteredFlights] = useState(flights);
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleFilter = () => {
    const filtered = flights.filter((flight) => {
      return (
        flight.departureCity
          .toLowerCase()
          .includes(departureCity.toLowerCase()) &&
        flight.arrivalCity.toLowerCase().includes(arrivalCity.toLowerCase()) &&
        new Date(flight.departureTime).toLocaleDateString() ===
          new Date(selectedDate).toLocaleDateString()
      );
    });

    setFilteredFlights(filtered);
  };

  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight);
  };

  useEffect(() => {
    setFilteredFlights(flights);
    setCustomerData("");
  }, [flights, selectedFlight]);

  return (
    <div className="row text-light">
      <div className="col-12">
        {selectedFlight ? (
          <>
            <button
              className="btn btn-warning"
              onClick={() => setSelectedFlight(null)}
            >
              İptal Et
            </button>
            <SelectedFlight />
          </>
        ) : (
          <>
            <h1 className="mb-4">Uçuş Listesi</h1>
            <form className="mb-4">
              <div className="row g-3">
                <div className="col-md-4">
                  <Input
                    label="Kalkış Şehri"
                    name="departureCity"
                    type="text"
                    placeholder="Kalkış Şehri"
                    setProp={setDepartureCity}
                    value={departureCity}
                  />
                </div>
                <div className="col-md-4">
                  <Input
                    label="Varış Şehri"
                    name="arrivalCity"
                    type="text"
                    placeholder="Varış Şehri"
                    setProp={setArrivalCity}
                    value={arrivalCity}
                  />
                </div>
                <div className="col-md-4">
                  <Input
                    label="Tarih"
                    name="selectedDate"
                    type="datetime-local"
                    placeholder="Tarih"
                    setProp={setSelectedDate}
                    value={selectedDate}
                  />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary mt-3"
                onClick={handleFilter}
              >
                Uçuşları Filtrele
              </button>
            </form>

            <FlightTable
              flights={filteredFlights}
              onSelectFlight={handleSelectFlight}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default FlightList;
