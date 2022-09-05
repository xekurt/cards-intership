import React, { useState } from "react";
import camp from "../../assets/images/camp.png";
import treeRight from "../../assets/images/treeRight.png";
import treeTop from "../../assets/images/treeTop.png";
import rock from "../../assets/images/rock.png";
import Location from "../../assets/icons/location.png";

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
        <div className="card__images">
          <div className="img-wrapper-2">
            <img src={treeTop} alt="treeTop" />
          </div>
          <div className="img-wrapper-1">
            <img src={camp} alt="camp" />
          </div>
          <div className="img-wrapper-3">
            <img src={treeRight} alt="treeRight" />
          </div>
          <div className="img-wrapper-4">
            <img src={rock} alt="rock" />
          </div>
        </div>
        <div className="card__buble__container">
          <div className="buble"></div>
          <p>Camping</p>
        </div>
        <div className="card__data">
          <h5>
            <span className="dollar-sign">$</span>
            29 / 8 <span>hrs</span>
          </h5>
          <p>per person</p>
          <div className="location">
            <img src={Location} alt="location" className="location__icon" />
            <p>Tara , Serbia</p>
          </div>
          <button className="date-button">Choose Date</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
