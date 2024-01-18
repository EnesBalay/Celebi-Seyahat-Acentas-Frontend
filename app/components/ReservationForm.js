// components/ReservationForm.js
import React, { useEffect, useState } from "react";
import { useFlights } from "../contexts/FlightsContext";
import Input from "./Input"; // Input bileşenini ekledik
import showAlert from "../utils/sweetalert";

const ReservationForm = () => {
  const { selectedFlight, setCustomerData, customerData } = useFlights();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    tcKimlik: "",
    birthDate: "",
    gender: "",
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReservation = () => {
    // Burada formData'yı kullanarak rezervasyonu oluşturabilirsiniz.
    // Örneğin bir API'ye POST isteği göndermek gibi.
    console.log("Rezervasyon bilgileri:", formData);
    console.log("Seçilen uçuş bilgileri:", selectedFlight);
    // TODO: Rezervasyonu oluştur ve kullanıcıyı başka bir sayfaya yönlendir
    setCustomerData(formData);
  };
  useEffect(() => {
    if (customerData?.firstName) {
      showAlert(
        "Rezervasyon Gerçekleşti!",
        "Rezervasyonunuz başarılı bir şekilde gerçekleşmiştir.",
        "success"
      );
    }
  }, [customerData]);

  return (
    <>
      {customerData ? (
        <></>
      ) : (
        <div className="col mt-4 text-light">
          <h2>Rezervasyon Formu</h2>
          <form className="my-4">
            <div className="row">
              <div className="col-md-6 mb-3">
                <Input
                  label="Ad"
                  name="firstName"
                  type="text"
                  placeholder="Adınız"
                  value={formData.firstName}
                  setProp={(value) => handleChange("firstName", value)}
                />
              </div>
              <div className="col-md-6 mb-3">
                <Input
                  label="Soyad"
                  name="lastName"
                  type="text"
                  placeholder="Soyadınız"
                  value={formData.lastName}
                  setProp={(value) => handleChange("lastName", value)}
                />
              </div>
              <div className="col-md-6 mb-3">
                <Input
                  label="E-posta"
                  name="email"
                  type="email"
                  placeholder="E-posta adresiniz"
                  value={formData.email}
                  setProp={(value) => handleChange("email", value)}
                />
              </div>
              <div className="col-md-6 mb-3">
                <Input
                  label="Telefon"
                  name="phone"
                  type="tel"
                  placeholder="Telefon numaranız"
                  value={formData.phone}
                  setProp={(value) => handleChange("phone", value)}
                />
              </div>
              <div className="col-md-6 mb-3">
                <Input
                  label="TC Kimlik Numarası"
                  name="tcKimlik"
                  type="text"
                  placeholder="TC Kimlik Numaranız"
                  value={formData.tcKimlik}
                  setProp={(value) => handleChange("tcKimlik", value)}
                />
              </div>
              <div className="col-md-6 mb-3">
                <Input
                  label="Doğum Tarihi"
                  name="birthDate"
                  type="date"
                  placeholder="Doğum Tarihiniz"
                  value={formData.birthDate}
                  setProp={(value) => handleChange("birthDate", value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Cinsiyet</label>
                <select
                  className="form-select"
                  name="gender"
                  value={formData.gender}
                  onChange={(e) => handleChange("gender", e.target.value)}
                >
                  <option value="">Cinsiyet Seçiniz</option>
                  <option value="Erkek">Erkek</option>
                  <option value="Kadın">Kadın</option>
                </select>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary my-4"
              onClick={handleReservation}
            >
              Rezervasyon Yap
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ReservationForm;
