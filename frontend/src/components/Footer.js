import React from "react";
import "./Footer.css"; // Import the CSS file for styling
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter  } from "react-icons/fa";
import "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <ul>
            <li>
              <a href="https://www.facebook.com/GoodUniverseNGO">
                <span className="icon">
                  <FaFacebook />
                </span>
              </a>
            </li>
            <li>
              {" "}
              <a href="https://www.instagram.com/gooduniversengo?igshid=YmMyMTA2M2Y%3D">
                <span className="icon">
                  <FaInstagram />
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/gooduniversengo/">
                <span className="icon">
                  <FaLinkedin />
                </span>
              </a>
            </li>
            <li>
              <a href="https://x.com/GooduniverseNGO?mx=2">
                <span className="icon">
                  <FaTwitter />
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="row">
          <ul>
            <li>
              <a href="https://gooduniverse.org/contact.html">Contact us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>

        <div className="row text-center footer-text">
          GOOD UNIVERSE Copyright © 2024 GOOD UNIVERSE - All rights reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;
