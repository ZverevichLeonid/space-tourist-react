import React, { useState } from "react";
import "./technology.scss";
import "./technology.responsive.scss";
import Header from "../Header/Header";
import technologyList from "./TechnologyInfo";
import { motion, AnimatePresence } from "framer-motion";

export const Technology = () => {
  const [technology, setTechnology] = useState(0);
  const [active, setActive] = useState("Launch vehicle");
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
          <AnimatePresence>
            <div className="technology__text">
              <div className="technology__subheading">
                <p>The terminology...</p>
              </div>
              <div className="technology__name">
                <motion.h3
                  key={technologyList[technology].name}
                  initial={{ scale: 1.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ display: "none", scale: 0 }}
                >
                  {technologyList[technology].name.toUpperCase()}
                </motion.h3>
              </div>
              <div className="technology__info">
                <motion.p
                  key={technologyList[technology].description}
                  initial={{ scale: 1.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ display: "none", scale: 0 }}
                >
                  {technologyList[technology].description}
                </motion.p>
              </div>
            </div>
          </AnimatePresence>
        </div>

        <AnimatePresence>
          <div className="technology__right">
            <motion.img
              key={technologyList[technology].name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="technology__img"
              src={
                window.innerWidth > "1355"
                  ? technologyList[technology].images.portrait
                  : technologyList[technology].images.landscape
              }
              alt={technologyList[technology].name}
            />
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Technology;
