import React from "react";
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
import SquareBall from "./carrerBoule";

function Menu({ isOpen, onChange }: { isOpen: boolean; onChange: any }) {
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
        <div className="hoverBox">
          <div className="deco-one">
            <SquareBall width={120} height={120} color="green" />
          </div>
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
