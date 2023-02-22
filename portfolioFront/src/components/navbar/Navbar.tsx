import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import gsap from "gsap";
import Menu from "../home/firstPart/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container, Row, Col } from "react-bootstrap";
import { Link, animateScroll, Element as scroll, scrollSpy, scroller } from 'react-scroll'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function noscroll() {
    var Html = document.querySelector(".html");
    if (Html != null) {
      Html.classList.add("noscroll");
    }
    setIsOpen(true);
  }
  useEffect(() => {
    const showAnim = gsap
      .from(".main-tool-bar", {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  }, []);

  return (
    <>
      <div className="main-tool-bar">
        <div className="container-fluid navbarr mx-5">
          <Row>
            <Col className="p-0">
              <Link className=" noSelect nav-name" to="top" spy={true} smooth={true} duration={500} offset={0}>
              <h4 className="">Luca grousset</h4>
              </Link>
            </Col>
            <Col className="d-flex justify-content-end">
              <span className="btnOpen" onClick={noscroll}>
                <FontAwesomeIcon icon={faBars} />
              </span>
            </Col>
          </Row>
        </div>
      </div>
      <Menu isOpen={isOpen} onChange={setIsOpen}></Menu>
    </>
  );
}

export default Navbar;
