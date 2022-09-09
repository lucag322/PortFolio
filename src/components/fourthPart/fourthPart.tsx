import React, { useState, useEffect, useRef } from "react";
import "./../../css/fourthPart.css";
import cloud from "./../../img/cloud.png";
import { Container, Row, Col } from "react-bootstrap";
import { Controller, Scene } from "react-scrollmagic";
import Spline from "@splinetool/react-spline";
import monstera from "./../../img/monstera.png";

function fourthPart() {
  const ref: any = useRef();

  return (
    <div className="fourthPart">
      <Container className="py-5">
        <Row className="buble3">
          <h2 className="partName  fw-light fst-italic pt-2 position-relative text-end">
            about
          </h2>
        </Row>
        <Row>
          <Col lg={4} sm={4} xs={4} className=" p-0">
            <img src={monstera} alt="" className="monsteraIMG" />
          </Col>
          <Col lg={8} sm={8} xs={8} className="d-flex align-items-center">
            <p className="yrsa position-relative zindex-sticky aboutText">
              Lorem ipsum dolor sit amet.Sed beatae quas sit fugit fugiat sit
              placeat doloribus ut eius atque est odio voluptates. Ut possimus
              veritatis eum libero deleniti ab illo optio Lorem ipsum dolor sit
              amet.Sed beatae quas sit fugit fugiat sit placeat doloribus ut
              eius atque est odio voluptates. Ut possimus veritatis eum libero
              deleniti ab illo optio
            </p>
          </Col>
        </Row>
        <Row className="pb-5 pt-2">
          <Col lg={8} sm={8} xs={8} className="d-flex align-items-center">
            <p className="yrsa position-relative zindex-sticky aboutText">
              Lorem ipsum dolor sit amet.Sed beatae quas sit fugit fugiat sit
              placeat doloribus ut eius atque est odio voluptates. Ut possimus
              veritatis eum libero deleniti ab illo optio Lorem ipsum dolor sit
              amet.Sed beatae quas sit fugit fugiat sit placeat doloribus ut
              eius atque est odio voluptates. Ut possimus veritatis eum libero
              deleniti ab illo optio
            </p>
          </Col>
          <Col lg={4} sm={4} xs={4} className=" p-0">
            <img src={monstera} alt="" className="image2" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default fourthPart;
