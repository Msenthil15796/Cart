import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="top">
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItems">HOME</li>
          </ul>
        </div>
        <div className="topRight">
          <Link to={"/profile"}>
            <img
              className="topImg"
              src="https://images.pexels.com/photos/11296338/pexels-photo-11296338.jpeg?cs=srgb&dl=pexels-anastasia-tooming-11296338.jpg&fm=jpg"
              alt="img"
            />
          </Link>
        </div>
        <div className="cart">
          <Link to={"/cart"}>
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
