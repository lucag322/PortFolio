import React, { useState, useEffect, useRef } from "react";
import "./../../css/fifthPart.css";
import cloud from "./../../img/cloud.png";
import { Container, Row, Col } from "react-bootstrap";
import { Controller, Scene } from "react-scrollmagic";
import Spline from "@splinetool/react-spline";
import monstera from "./../../img/monstera.png";
import ContacteForm from "./ContacteForm";

function FifthPart() {
  const ref: any = useRef();

  return (
    <div className="FifthPart">
        <div className="gradiantEnd">
        <Container className="">
        <Row className="pb-5">
          <Col lg={12} sm={12} xs={12}>
            <h2 className="partName  fw-light fst-italic pt-2 position-relative zindex-sticky">
              Contacte
            </h2>
            <div className="contacteForm mt-3">
                <ContacteForm />
            </div>
          </Col>
          </Row>
          </Container>
        </div>
    </div>
  );
}

export default FifthPart;
