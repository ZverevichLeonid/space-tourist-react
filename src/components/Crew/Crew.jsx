import React, { useState } from "react";
import Header from "../Header/Header";
import crews from "./CrewsInfo.js";
import "./crew.scss";
import "./crew.responsive.scss";
import { motion, AnimatePresence } from "framer-motion";

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
            <AnimatePresence>
              <div className="crew__role">
                <motion.h4
                  key={crews[crew].role}
                  initial={{ scale: 1.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ display: "none", scale: 0 }}
                >
                  {crews[crew].role}
                </motion.h4>
              </div>
              <div className="crew__name">
                <motion.h3
                  key={crews[crew].name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ display: "none" }}
                >
                  {crews[crew].name}
                </motion.h3>
              </div>
              <div className="crew__bio">
                <motion.p
                  key={crews[crew].bio}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  exit={{ display: "none", scale: 0 }}
                >
                  {crews[crew].bio}
                </motion.p>
              </div>
            </AnimatePresence>
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
          <AnimatePresence>
            <div className="crew__img">
              <motion.img
                key={crews[crew].name}
                src={crews[crew].image}
                alt={crews[crew].name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
export default Crew;
