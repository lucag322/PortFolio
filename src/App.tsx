import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Hours from "./components/home/firstPart/Hours";
import Menu from "./components/home/firstPart/menu";
import Home from "./components/home/Home";
import Project from "./components/Project/Project";
import Test from "./components/test/test";
import {Routes, Route} from  "react-router-dom";
import "./css/thirdPart.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

gsap.registerPlugin(ScrollTrigger);

function App() {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function blue() {
      const body: any = document.querySelector("body");
      const menu: any = document.querySelector(".btnOpen");
      const partname: any = document.querySelector("#Titre");
      const hiddebarmenu: any = document.querySelector(".hiddebarmenu");
      const hiddebartime: any = document.querySelector(".hiddebartime");
      const heure: any = document.querySelector(".heure");
      let observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              entry.isIntersecting &&
              entry.target.classList.contains("blueswitch")
            ) {
              console.log("blue");
              body.classList.add("bluemode");
              menu.classList.add("bluemodemenue");
              partname.classList.add("bluemodename");
              hiddebarmenu.classList.add("hidde");
              hiddebartime.classList.add("hidde");
              heure.classList.add("bluemodeheure");
            } else if (
              entry.isIntersecting &&
              entry.target.classList.contains("whiteswitch")
            ) {
              console.log("white");
              body.classList.remove("bluemode");
              menu.classList.remove("bluemodemenue");
              partname.classList.remove("bluemodename");
              hiddebarmenu.classList.remove("hidde");
              hiddebartime.classList.remove("hidde");
              heure.classList.remove("bluemodeheure");
            }
          });
        },
        {
          rootMargin: "-47% 0px -47% 0px",
        }
      );

      let target = ".swictch";
      document.querySelectorAll(target).forEach((i) => {
        if (i) {
          observer.observe(i);
        }
      });
    }

    blue();
  }, []);

  function noscroll() {
    var Html = document.querySelector(".html");
    if (Html != null) {
      Html.classList.add("noscroll");
    }
    setIsOpen(true);
  }

  return (
    <div className="App">
      <Hours />
      <div className="hiddebarmenu "></div>
      <div className="hiddebartime"></div>
      <span className="btnOpen" onClick={noscroll}>
        <FontAwesomeIcon icon={faBars} />
      </span>
      <Menu isOpen={isOpen} onChange={setIsOpen}></Menu>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      <Row name="contact" className=" swictch whiteswitch">
        <Col lg={6} sm={6} xs={6} className="footerLeft text-left">
          <span className="px-5">2023</span>
        </Col>
        <Col lg={6} sm={6} xs={6} className="fotterRight text-end">
          <span className="px-5">Grousset Luca</span>
        </Col>
      </Row>
    </div>
  );
}

export default App;