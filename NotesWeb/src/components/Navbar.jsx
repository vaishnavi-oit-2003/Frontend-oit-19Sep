import React from "react";
import "./Navbar.css";
import logoLight from "../assets/logo-black.png";
import logoDark from "../assets/logo-white.png";
import searchIconLight from "../assets/search-w.png";
import searchIconDark from "../assets/search-b.png";
import toggleLight from "../assets/night.png";
import toggleDark from "../assets/day.png";

const Navbar = ({ theme, setTheme }) => {
  const toggleMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="navbar">
      <img src={theme === "light" ? logoLight : logoDark} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img src={theme === "light" ? searchIconLight : searchIconDark} alt="Search Icon" />
      </div>
      <img
        onClick={toggleMode}
        src={theme === "light" ? toggleLight : toggleDark}
        alt="Toggle Theme"
        className="toggle-icon"
      />
    </nav>
  );
};

export default Navbar;
