import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "./logooo.png"; // Import your logo image

function Header() {
  return (
    <div className="header" style={{ minHeight: "4vh", display: 'flex', backgroundColor: "black", alignItems: 'center', justifyContent: 'space-between', padding: '10px' }} >
      {/* Logo displayed at the top-left corner */}
      <img className="logo" src={logo} alt="Logo" style={{ width: '50px', height: 'auto' }} />

      {/* Navigation links justified to the end */}
      <ul className="nav justify-content-end ">
        <li className="nav-item p-2">
          <RouterLink className="nav-link text-light" to="/home">
            Home
          </RouterLink>
        </li>
        <li className="nav-item p-2">
          <ScrollLink className="nav-link text-light" to="about-section" smooth={true} duration={500}>
            About Us
          </ScrollLink>
        </li>
        <li className="nav-item p-2">
          <RouterLink className="nav-link text-light" to="/signup">
            Signup
          </RouterLink>
        </li>
        <li className="nav-item p-2">
          <RouterLink className="nav-link text-light" to="/signin">
            Signin
          </RouterLink>
        </li>
        
        <li className="nav-item p-2">
          <button className="btn btn-light p-2">Support a Girl Child</button>
        </li>
      </ul>
    </div>
  );
}

export default Header;