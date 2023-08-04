import React, { useState } from "react";
import "./technology.scss";
import "./technology.responsive.scss";
import Header from "../Header/Header";
import technologyList from "./TechnologyInfo";

export const Technology = () => {
  const [technology, setTechnology] = useState(0);
  const [active, setActive] = useState("Launch vehicle");
  console.log(typeof window.innerWidth);
  return (
    <section className="technology">
      <Header />
      <div className="technology__title">
        <h4>
          <span>03</span>Space Launch
        </h4>
      </div>
      <div className="technology__content">
        <div className="technology__left">
          <div className="technology__numbers">
            {technologyList.map((item, index) => {
              return (
                <span
                  key={item.name}
                  onClick={() => {
                    setTechnology(index);
                    setActive(item.name);
                  }}
                  className={
                    active === item.name
                      ? "technology__number active-number"
                      : "technology__number"
                  }
                >
                  {index + 1}
                </span>
              );
            })}
          </div>
          <div className="technology__text">
            <div className="technology__subheading">
              <p>The terminology...</p>
            </div>
            <div className="technology__name">
              <h3>{technologyList[technology].name.toUpperCase()}</h3>
            </div>
            <div className="technology__info">
              <p>{technologyList[technology].description}</p>
            </div>
          </div>
        </div>
        <div className="technology__right">
          <img
            className="technology__img"
            src={
              window.innerWidth > "1355"
                ? technologyList[technology].images.portrait
                : technologyList[technology].images.landscape
            }
            alt={technologyList[technology].name}
          />
        </div>
      </div>
    </section>
  );
};

export default Technology;
