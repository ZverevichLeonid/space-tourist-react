import React, { useState } from "react";
import "./destinationsList.scss";
import "./destinationsList.responsive.scss";
import Header from "../Header/Header";
import planets from "./PlanetsInfo";
import { motion, AnimatePresence } from "framer-motion";
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
          <AnimatePresence>
            <div className="destinations__img">
              <motion.img
                transition={{ duration: 0.5 }}
                key={planets[planet].name}
                initial={{ scale: 1.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ display: "none", scale: 0 }}
                src={planets[planet].image}
                alt={planets[planet].name}
              />
            </div>
          </AnimatePresence>
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
          <AnimatePresence custom={"wait"}>
            <div className="destinations__desc">
              <motion.p
                key={planets[planet].name}
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.3,
                }}
              >
                {planets[planet].description}
              </motion.p>
            </div>
          </AnimatePresence>
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

// ДОБАВИТЬ АНИМАЦИЮ
