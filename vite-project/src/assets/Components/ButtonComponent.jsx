import React from "react";
const ButtonComponent = ({ lable, onBtnClick }) => {
  return <button onClick={onBtnClick}>{lable}</button>;
};

export default ButtonComponent;
