import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <header className="header">
        <div className="header__name">
          <p>Ayoub Rezaei</p>
        </div>
        <div className="divider"></div>
        <div className="header__career">
          <p>Front-end developer</p>
        </div>
      </header>
      <article className="body">
        <h5>Please select a card </h5>
        <ul>
          <li>
            <a href="#first"> First card </a>
          </li>
          <li>
            <a href="#second">Second card </a>
          </li>
          <li>
            <a href="#Third"> Third card</a>
          </li>
        </ul>
      </article>
      <footer className="footer"></footer>
    </section>
  );
};

export default Home;
