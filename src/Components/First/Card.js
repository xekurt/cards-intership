import React, { useState } from "react";
import camp from "../../assets/images/camp.png";
import treeRight from "../../assets/images/treeRight.png";
import treeTop from "../../assets/images/treeTop.png";
import rock from "../../assets/images/rock.png";
import Location from "../../assets/icons/location.png";
import sea from "../../assets/images/sea.png";
import rock2 from "../../assets/images/rock2.png";
import boat from "../../assets/images/boat.png";

import "./First.scss";

const Card = () => {
  const [active, setActive] = useState("KAYAKING");
  const handleChangeActive = (e) => {
    const { id } = e.target;
    setActive(id);
  };
  return (
    <div className="card-area">
      <div className="card-area__buttons">
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
      <div className="flip">
        <div className={`card ${active === "CAMPING" && "rotate"}`}>
          <div className="front">
            <div className="front__images">
              <div className="img-wrapper-2">
                <img src={sea} alt="treeTop" />
              </div>
              <div
                className={`img-wrapper-5 disable ${
                  active === "KAYAKING" && "reveal"
                }`}
              >
                <img src={boat} alt="camp" />
              </div>

              <div
                className={`img-wrapper-4 disable ${
                  active === "KAYAKING" && "reveal"
                }`}
              >
                <img src={rock2} alt="rock" />
              </div>
            </div>
            <div className="front__buble__container">
              <div className="buble2"></div>
              <p>KAYAKING</p>
            </div>
            <div className="front__data">
              <h5>
                <span className="dollar-sign">$</span>
                39 / 4 <span>hrs</span>
              </h5>
              <p>per person</p>
              <div className="location">
                <img src={Location} alt="location" className="location__icon" />
                <p>Drina , Serbia</p>
              </div>
              <button className="date-button-alt">Choose Date</button>
            </div>
          </div>
          <div className="back">
            <div className="back__images">
              <div className="img-wrapper-2">
                <img src={treeTop} alt="treeTop" />
              </div>
              <div
                className={`img-wrapper-1 disable ${
                  active === "CAMPING" && "reveal"
                }`}
              >
                <img src={camp} alt="camp" />
              </div>
              <div
                className={`img-wrapper-3 disable ${
                  active === "CAMPING" && "reveal"
                }`}
              >
                <img src={treeRight} alt="treeRight" />
              </div>
              <div
                className={`img-wrapper-4 disable ${
                  active === "CAMPING" && "reveal"
                }`}
              >
                <img src={rock} alt="rock" />
              </div>
            </div>

            <div className="back__buble__container">
              <div className="buble"></div>
              <p>Camping</p>
            </div>
            <div className="back__data">
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
      </div>
    </div>
  );
};

export default Card;
{
  /* <div className="back__images">
<div
  className={`img-wrapper-2 disable ${
    active === "CAMPING" && "reveal"
  }`}
>
  <img src={treeTop} alt="treeTop" />
</div>
<div
  className={`img-wrapper-1 disable ${
    active === "CAMPING" && "reveal"
  }`}
>
  <img src={camp} alt="camp" />
</div>
<div
  className={`img-wrapper-3 disable ${
    active === "CAMPING" && "reveal"
  }`}
>
  <img src={treeRight} alt="treeRight" />
</div>
<div
  className={`img-wrapper-4 disable ${
    active === "CAMPING" && "reveal"
  }`}
>
  <img src={rock} alt="rock" />
</div>
</div> */
}

{
  /* <div className="front__images">
            <div className="img-wrapper-2">
              <img src={sea} alt="treeTop" />
            </div>
            <div
              className={`img-wrapper-5 disable ${
                active === "KAYAKING" && "reveal"
              }`}
            >
              <img src={boat} alt="camp" />
            </div>

            <div
              className={`img-wrapper-4 disable ${
                active === "KAYAKING" && "reveal"
              }`}
            >
              <img src={rock2} alt="rock" />
            </div>
          </div> */
}
