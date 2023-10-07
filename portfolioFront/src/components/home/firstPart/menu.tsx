import React, { useState } from "react";
import { items } from "./menuItems";
import "../../../css/firstPart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import {
  Link,
  animateScroll,
  Element as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import SquareBall from "./carrerBoule";

function Menu({ isOpen, onChange }: { isOpen: boolean; onChange: any }) {
  const controls = useAnimation();

  controls.start({
    rotate: 360,
    speed: 1,
    transition: {
      duration: 5,
      repeat: Infinity,
      loop: Infinity,
      ease: "linear",
    },
  });

  function scrollBack() {
    var Html = document.querySelector(".html");
    if (Html != null) {
      Html.classList.remove("noscroll");
    }
    onChange(false);
  }

  return (
    <div className={`Menu ${isOpen && "open"}`}>
      <span className=" btnClose" onClick={scrollBack}>
        <FontAwesomeIcon icon={faXmark} className="dote" />
      </span>
      <div className="Menu-items">
        <div className="menu-items-list one">
          <Link
            activeClass="active"
            className=" noSelect menu-item"
            to={"top"}
            spy={true}
            smooth={true}
            duration={500}
            offset={0}
            onClick={() => scrollBack()}
          >
            TOP
          </Link>
          <Link
            activeClass="active"
            className=" noSelect menu-item"
            to={"about"}
            spy={true}
            smooth={true}
            duration={500}
            offset={0}
            onClick={() => scrollBack()}
          >
            ABOUT
          </Link>
        </div>
        <div
          className="hoverBox"
          // onMouseEnter={handleHover}
          // onMouseLeave={handleHover}
        >
          <div className="deco-one">
            <SquareBall width={200} height={200} />
          </div>
        </div>
        <div
          className="hoverBox2"
          // onMouseEnter={handleHover}
          // onMouseLeave={handleHover}
        >
          <motion.div className="deco-two" initial={{ rotate: 0 }}>
            <span className="textDeco">✺</span>
          </motion.div>
        </div>
        <div className="menu-items-list two">
          <Link
            activeClass="active"
            className=" noSelect menu-item"
            to={"project"}
            spy={true}
            smooth={true}
            duration={500}
            offset={0}
            onClick={() => scrollBack()}
          >
            PROJECT
          </Link>
          <Link
            activeClass="active"
            className=" noSelect menu-item"
            to={"contacte"}
            spy={true}
            smooth={true}
            duration={500}
            offset={0}
            onClick={() => scrollBack()}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
