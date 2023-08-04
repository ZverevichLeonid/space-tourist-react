import React from "react";
import "./header.scss";
import "./header.responsive.scss";
import logo from "../../assets/shared/logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__img">
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <NavLink className="header__item-link" to="/home">
                <span className="number">00</span> HOME
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink className="header__item-link" to="/destinations">
                <span className="number">01</span> DESTINATION
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink className="header__item-link" to="/crew">
                <span className="number">02</span> CREW
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink className="header__item-link" to="/technology">
                <span className="number">03</span> TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </nav>
        <button
          className="mobile__btn"
          onClick={() => {
            setNav(!nav);
          }}
        >
          {nav ? (
            <AiOutlineClose size={25} color="hsl(231, 77%, 90%)" />
          ) : (
            <AiOutlineMenu size={25} color="hsl(231, 77%, 90%)" />
          )}
        </button>
        <nav
          className={nav ? "header__nav-burger active" : "header__nav-burger"}
        >
          <ul className="header__list-burger">
            <li className="header__item">
              <NavLink className="header__item-link" to="/home">
                <span className="number">00</span> HOME
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink className="header__item-link" to="/destinations">
                <span className="number">01</span> DESTINATION
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink className="header__item-link" to="/crew">
                <span className="number">02</span> CREW
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink className="header__item-link" to="/technology">
                <span className="number">03</span> TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
