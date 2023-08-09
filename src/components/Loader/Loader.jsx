import React from "react";
import "./loader.scss";
import loaderIMG from "../../assets/loader.gif";
export const Loader = () => {
  return (
    <div className="loader-block">
      <img className="loader" src={loaderIMG} />
    </div>
  );
};
