import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ cartItems }) => {
  return (
    <header>
      <div>
        <h1>
          <Link className="Title" to="/">
            ShopSlides
          </Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link className="Home" to="/">
            Home
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link classname="Cart" to="/cart">
            Cart
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link className="Contact" to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
