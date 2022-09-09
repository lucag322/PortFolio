import react, { useEffect } from "react";
import "./../../css/firstPart.css";
import { Container, Row, Col } from "react-bootstrap";
import Hours from "./Hours";

function FirstPart() {
  /*<h3 className=' m-0 text-'>FrontEnd Developer</h3>*/
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
            <li>Skills</li>
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
