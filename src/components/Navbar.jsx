import React from "react";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaArrowRightToBracket, FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { nav } from "../Data";
import { NavLink } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
  const menul = nav;
  console.log("🚀 ~ Navbar ~ menul:", menul);

  return (
    <nav className="navbar">
      <div className="upperNavItem">
        <div className="left">
          <div className="telephone">
            <BsTelephone className="icon" />
            (629) 555-0129
          </div>
          <div className="vr"></div>
          <div className="email">
            <MdOutlineMailOutline className="icon" />
            felicia.reid@example.com
          </div>
        </div>
        <div className="right">
          <Link to="/singup">Sign In / Sign Up</Link>
          <Link to="/singup">
            <FaArrowRightToBracket />
          </Link>
        </div>
      </div>
      <div className="menu">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Company Logo" />
          </Link>
        </div>
        <div className="menuLinks">
          <ul>
            {nav.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  {item.name}
                </NavLink>
                ;
              </li>
            ))}
          </ul>
        </div>
        <div className="searchAndCart">
          <FaMagnifyingGlass className="icon" />
          <LuShoppingCart className="icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
