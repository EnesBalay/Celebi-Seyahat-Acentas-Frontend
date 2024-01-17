import React from "react";

const Input = ({ label, name, type, placeholder, setProp, value }) => {
  return (
    <>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="form-control"
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setProp(e.target.value)}
      />
    </>
  );
};

export default Input;
