import React from "react";
import logo from "../svg/pizza2.png";

console.log(logo);
const LogoComponent = () => {
  return (
    <div>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default LogoComponent;
