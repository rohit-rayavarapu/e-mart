import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navSection">
        <Link to="/">
          <div className="title">E-cart</div>
        </Link>
        <div className="search">
          <input type="search" placeholder="Search products" />
        </div>
        <div className="user">
          <div className="user-detail">SignIn/SignUp</div>
          <div className="cart">cart</div>
        </div>
      </div>
      <div className="subMenu">
        <ul>
          <Link to="/ac">
            <li>Ac</li>
          </Link>

          <Link to="/computers">
            <li>Computers</li>
          </Link>
          <Link to="/books">
            <li>Books</li>
          </Link>
          <Link to="/fridges">
            <li>Fridge</li>
          </Link>
          <Link to="/furnitures">
            <li>Furniture</li>
          </Link>
          <Link to="/kitchens">
            <li>Kitchen</li>
          </Link>
          <Link to="/mobiles">
            <li>Mobiles</li>
          </Link>
          <Link to="/mens">
            <li>Men Fashion</li>
          </Link>
          <Link to="/speakers">
            <li>Speakers</li>
          </Link>
          <Link to="/tvs">
            <li>Tv</li>
          </Link>
          <Link to="/watches">
            <li>Watches</li>
          </Link>
          <Link to="/womans">
            <li>Woman Dressing</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
