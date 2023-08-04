import React, { useState } from "react";
import "./destinationsList.scss";
import "./destinationsList.responsive.scss";
import Header from "../Header/Header";
import planets from "./PlanetsInfo";
export const DestinationsList = () => {
  const [planet, setPlanet] = useState(0);
  const [active, setActive] = useState("Moon");
  return (
    <section className="destinations">
      <Header />
      <div className="destinations__content">
        <div className="destinations__left">
          <div className="destinations__title">
            <h2>
              <span>01</span> Pick your destination
            </h2>
          </div>
          <div className="destinations__img">
            <img src={planets[planet].image} alt="" />
          </div>
        </div>
        <div className="destinations__right">
          <div className="destinatios__choices">
            <span>
              {planets.map((planet, id) => {
                return (
                  <span
                    className={
                      active === planet.name
                        ? `destinatios__choice active`
                        : `destinatios__choice`
                    }
                    key={planet.name}
                    onClick={() => {
                      setPlanet(id);
                      setActive(planet.name);
                    }}
                  >
                    {planet.name.toUpperCase()}
                  </span>
                );
              })}
            </span>
          </div>
          <div className="destinations__name">
            <h3>{planets[planet].name.toUpperCase()}</h3>
          </div>
          <div className="destinations__desc">
            <p>{planets[planet].description}</p>
          </div>
          <div className="destinations__values">
            <div className="destinations__value">
              <p>AVG. DISTANCE</p>
              <span>{planets[planet].distance.toUpperCase()}</span>
            </div>
            <div className="destinations__value">
              <p>EST. TRAVEL TIME</p>
              <span>{planets[planet].travel.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsList;

// ДОБАВИТЬ АНИМАЦИЮ И ВОЗМОЖНО СДЕЛАТЬ ДЕКОМПОЗИЦИЮ ДО ДЕСТИНАТИОН
