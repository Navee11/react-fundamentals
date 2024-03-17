import React from "react";
import "../src/navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="nav-menu">
        <div className="nav-item">
          <a href="/">Amazon miniTV</a>
        </div>
        <div className="nav-item">
          <a href="/">Sell</a>
        </div>
        <div className="nav-item">
          <a href="/">Best Sellers</a>
        </div>
        <div className="nav-item">
          <a href="/">Mobiles</a>
        </div>
        <div className="nav-item">
          <a href="/">Today's Deals</a>
        </div>
        <div className="nav-item">
          <a href="/">Electronics</a>
        </div>
        <div className="nav-item">
          <a href="/">New Releases</a>
        </div>
        <div className="nav-item">
          <a href="/">Customer Services</a>
        </div>
        <div className="nav-item">
          <a href="/">Prime</a>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
