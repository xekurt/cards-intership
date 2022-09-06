import ReactDOM from "react-dom";
import React from "react";
import "./style.scss";
import Home from "./Pages/HomePage/Home.jsx";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage.jsx";

const App = () => {
  return (
    <div>
      <Home />
      <ProjectsPage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("App"));
