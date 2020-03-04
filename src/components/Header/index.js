import React from "react";
import "./styles.css";
import facebook from "../../assets/facebook.svg";
function Header() {
  return (
    <header className="header">
      <img src={facebook} alt="facebook" />
    </header>
  );
}

export default Header;
