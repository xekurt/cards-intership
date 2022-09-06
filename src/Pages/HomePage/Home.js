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
        <h5>Please select card or scroll to bottom </h5>
        <ul>
          <li>
            <a href="#first"> Pricing card </a>
          </li>
        </ul>
      </article>
      <footer className="footer"></footer>
    </section>
  );
};

export default Home;
