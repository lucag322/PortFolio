import "./../../css/home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import FirstPart from "./firstPart/firstPart";
import SecondPart from "./secondPart/secondPart";
import ThirdPart from "./thirdPart/thirdPart";
import FourthPart from "./fourthPart/fourthPart";
import FifthPart from "./fifthPart/fifthPart";
import "./../../css/thirdPart.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";

gsap.registerPlugin(ScrollTrigger);

function Home() {

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
<>
      <Row name="top" className="swictch whiteswitch">
        <FirstPart />
      </Row>
      <Row name="about" className="swictch whiteswitch">
        <FourthPart />
      </Row>
      <Col name="project" className="swictch blueswitch">
        
            <ThirdPart />
          
      </Col>
      <Row name="contact" className=" swictch whiteswitch">
        <FifthPart />
      </Row>
    </>
  );
}

export default Home;