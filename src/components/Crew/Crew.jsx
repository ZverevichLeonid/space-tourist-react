import React, { useState } from "react";
import Header from "../Header/Header";
import crews from "./CrewsInfo.js";
import "./crew.scss";
import "./crew.responsive.scss";

export const Crew = () => {
  const [crew, setCrew] = useState(0);
  const [active, setActive] = useState(0);

  return (
    <section className="crew">
      <Header />
      <div className="crew__content">
        <div className="crew__left">
          <div>
            <div className="crew__title">
              <h3>
                <span>02</span>Meet your crew
              </h3>
            </div>
            <div className="crew__role">
              <h4>{crews[crew].role}</h4>
            </div>
            <div className="crew__name">
              <h3>{crews[crew].name}</h3>
            </div>
            <div className="crew__bio">
              <p>{crews[crew].bio}</p>
            </div>
          </div>
          <div className="crew__inputs">
            {crews.map((item, index) => {
              return (
                <span
                  onClick={() => {
                    setCrew(index);
                    setActive(index);
                  }}
                  className={active === index ? "round round-active" : "round"}
                ></span>
              );
            })}
          </div>
        </div>
        <div className="crew__right">
          <div className="crew__img">
            <img src={crews[crew].image} alt={crews[crew].name} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Crew;
