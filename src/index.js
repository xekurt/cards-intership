import ReactDOM from "react-dom";
import React from "react";
import "./style.scss";
import Home from "./Pages/HomePage/Home";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";

const App = () => {
  return (
    <>
      <Home />
      <ProjectsPage />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("App"));
