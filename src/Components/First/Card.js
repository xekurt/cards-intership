import React, { useState } from "react";
import camp from "../../assets/camp.png";
import treeRight from "../../assets/treeRight.png";
import treeTop from "../../assets/treeTop.png";

import "./First.scss";
const Card = () => {
  const [active, setActive] = useState("KAYAKING");
  const handleChangeActive = (e) => {
    const { id } = e.target;
    setActive(id);
  };
  return (
    <div className="card">
      <div className="card__buttons">
        <div className={`active ${active === "KAYAKING" ? "left" : "right"}`}>
          {active}
        </div>
        <button id="KAYAKING" onClick={handleChangeActive}>
          KAYAKING
        </button>
        <button id="CAMPING" onClick={handleChangeActive}>
          CAMPING
        </button>
      </div>

      <div className="card__content">
        <div className="img-wrapper-2">
          <img src={treeTop} alt="treeTop" />
        </div>
        <div className="img-wrapper-1">
          <img src={camp} alt="camp" />
        </div>
        <div className="img-wrapper-3">
          <img src={treeRight} alt="treeRight" />
        </div>
      </div>
    </div>
  );
};

export default Card;
