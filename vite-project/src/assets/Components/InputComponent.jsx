import React from "react";

const InputComponent = ({ type, value, onChange, placeholder }) => {
  //   console.log(type, value, onChange, placeholder);
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    ></input>
  );
};

export default InputComponent;
