import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import gsap from "gsap";
import Menu from "../home/firstPart/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container, Row, Col } from "react-bootstrap";
import {
  Link,
  animateScroll,
  Element as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { useLocation } from "react-router-dom";

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

  const location = useLocation();
  const isProjectPage = location.pathname.includes("/project/");

  return (
    <>
      <div className="main-tool-bar">
        <div className="container-fluid navbarr">
          <Row>
            <Col className="">
              <Link
                className=" noSelect nav-name"
                style={{ color: "white" }}
                to="top"
                spy={true}
                smooth={true}
                duration={500}
                offset={0}
              >
                <h4>Luca grousset</h4>
              </Link>
            </Col>
            <Col className="d-flex justify-content-end align-items-center">
              <div className="navbtn">
                {isProjectPage ? (
                  <a
                    href="/"
                    className="nav-name px-2"
                    style={{
                      color: "white",
                      fontSize: "1.5rem",
                      textDecoration: "underline",
                    }}
                  >
                    <FontAwesomeIcon icon={faHome} />
                  </a>
                ) : (
                  <span className="px-3 py-1 btnOpen" onClick={noscroll}>
                    Menu
                  </span>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Menu isOpen={isOpen} onChange={setIsOpen}></Menu>
    </>
  );
}

export default Navbar;
