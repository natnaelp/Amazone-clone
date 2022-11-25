// import React from "react";

import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import { FcDepartment } from "react-icons/fc";
import { FaMapMarkedAlt } from "react-icons/fa";
import flag from "./Images/united-states-flag-icon.png";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const [city, setCity] = useState();
  const [postal, setPostal] = useState();

  const x = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    axios
      .get("https://ipinfo.io/172.58.58.39/json?token=57cc39a9412a5e")
      .then((response) => {
        setCity(response.data.city);
        setPostal(response.data.postal);
      });
  }, []);

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/" onClick={x}>
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <h4>
        <FaMapMarkedAlt color="#FBF7DA" />
      </h4>

      <div className="header__option">
        <span className="header__optionLineOne">
          <p>Deliver to {!user ? "Natnael" : user?.email}</p>
        </span>
        <span className="header__optionLineTwo">
          {city} {postal}
        </span>
      </div>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__option">
        <span className="header__optionLineOne">English</span>
        <span className="">
          <img className="" src={flag} />{" "}
        </span>
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__clearlink">
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Hello, {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders" className="header__clearlink" onClick={x}>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout" className="header__clearlink" onClick={x}>
          <div className="header__optionBasket">
            <ShoppingCartOutlinedIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
