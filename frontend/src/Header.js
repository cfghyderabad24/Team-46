import React from "react";
import { Link as RouterLink } from "react-router-dom"; 
import logo from "./image/logooo.png"; // Import your logo image

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
          <RouterLink className="nav-link text-light" to="/sponsor">
            Support a Girl Child
          </RouterLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
