import react, { useEffect, useRef } from "react";
import "./../../css/firstPart.css";
import { Container, Row, Col } from "react-bootstrap";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
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
      
      </div>
  );
}

export default FirstPart;
