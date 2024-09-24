import React from "react";
import nav from "../Data";
import './footer.css'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footerLinks">
          <div>
            <p>Navigation</p>
            <ul>
              {nav.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p>What We Do</p>
            <ul>
              <li>
                <a href="#">Encouraging Testing</a>
                <a href="#">Strengthening Advocacy</a>
                <a href="#">Sharing Information</a>
                <a href="#"> Building Leadership</a>
                <a href="#">Engaging With Global Fund</a>
                <a href="#"> Shining a Light</a>
              </li>
            </ul>
          </div>
          <div>
            <p>LEGAL</p>
            <ul>
              <li>
                <a href="#">General Info </a>
                <a href="#">Privacy Policy </a>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div>
            <p>TALK TO US</p>
            <ul>
              <li>
                <a href="#">support@ercom.com</a>
              </li>
              <li>
                <a href="#">+66 2399 1145 </a>
              </li>
              <li>
                <a href="#">Contact Us </a>
              </li>
              <li>
                <a href="#">Facebook </a>
              </li>
              <li>
                <a href="#">Linkedin </a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
