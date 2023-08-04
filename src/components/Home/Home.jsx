import React from "react";
import "./home.scss";
import "./home.responsive.scss";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

export const Home = () => {
  function onBlur(state) {
    return state(false);
  }
  return (
    <section className="home">
      <Header onBlur={onBlur} />
      <div className="home__content">
        <div className="home__text">
          <div className="home__subtitle">
            <p>SO, YOU WANT TO TRAVEL TO</p>
          </div>
          <div className="home__title">
            <h1>SPACE</h1>
          </div>
          <div className="home__desc">
            <p>
              Let’s face it, if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <Link to="/destinations" className="home__explore">
          <span>EXPLORE</span>
        </Link>
      </div>
    </section>
  );
};

export default Home;
