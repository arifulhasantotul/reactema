import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
   return (
      <div className="header">
         <img src={logo} alt="" />

         <div className="navbar">
            <a href="/home">Home</a>
            <a href="/order">Order</a>
            <a href="/contact">Contact</a>
         </div>
      </div>
   );
};

export default Header;
