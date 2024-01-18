import React from "react";
import SelectedFlightInformation from "./SelectedFlightInformation";
import ReservationForm from "./ReservationForm";

const CustomerData = () => {
  return (
    <div className="col-12">
      <div className="row">
        <SelectedFlightInformation />
        <ReservationForm />
      </div>
    </div>
  );
};

export default CustomerData;
