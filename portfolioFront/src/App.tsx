import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Hours from "./components/home/firstPart/Hours";
import Menu from "./components/home/firstPart/menu";
import Home from "./components/home/Home";
import Project from "./components/Project/Project";
import Test from "./components/test/test";
import { Routes, Route, ScrollRestoration } from "react-router-dom";
import "./css/thirdPart.css";
import MouseTracker from "./components/MouseFollow";

function App() {
  return (
    <div className="App">
      <Home />
      <MouseTracker />
    </div>
  );
}

export default App;
