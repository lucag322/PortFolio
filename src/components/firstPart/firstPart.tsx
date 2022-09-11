import react, { useEffect, useRef } from "react";
import "./../../css/firstPart.css";
import { Container, Row, Col } from "react-bootstrap";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Hours from "./Hours";

function FirstPart() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 1000,
      behavior: 'smooth'
    });
  };

  return (
    <div className="firstPart">
      <div className="gradiant">
        <Container>
          <Row className="firstRow">
            <Col>
              <div className="namePart noSelect">
                <h2 className=" m-0 fw-light fst-italic">Luca</h2>
                <h2 className=" m-0 text-end fw-light fst-italic">Grousset</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="arrow bounce noSelect"></div>
            </Col>
          </Row>
        </Container>
        <nav className="noSelect navbarCustom">
          <ul className="navbarContent thrn fw-bold ">
            <li onClick={scrollToTop}> Skills</li>
            <li className="py-2">-</li>
            <li>About </li>
            <li className="py-2">-</li>
            <li>Work </li>
            <li className="py-2">-</li>
            <li>Contact</li>
          </ul>
        </nav>
        <span>
          <Hours/>
        </span>
      </div>
    </div>
  );
}

export default FirstPart;
