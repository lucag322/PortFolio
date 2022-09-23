import React, { useState, useEffect, useRef } from "react";
import Slider from "./slider";
import "./../../css/secondPart.css";
import cloud from "./../../img/cloud.png";
import { Container, Row, Col } from "react-bootstrap";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Spline from "@splinetool/react-spline";
import handtapping from "./../../img/hand-coding-animate.svg";

function secondPart() {
  const ref: any = useRef();

  return (
    <div className="secondPart skillsTitle pb-5">
      <Container className="">
        <Row className="pb-5">
          <Col lg={9} sm={9} xs={9}>
            <h2 className="partName  fw-light fst-italic pt-2 position-relative zindex-sticky">
              Skills
            </h2>
            <p className="yrsa position-relative zindex-sticky">
              Lorem ipsum dolor sit amet.Sed beatae quas sit fugit fugiat sit
              placeat doloribus ut eius atque est odio voluptates. Ut possimus
              veritatis eum libero deleniti ab illo optio Lorem ipsum dolor sit
              amet.Sed beatae quas sit fugit fugiat sit placeat doloribus ut
              eius atque est odio voluptates. Ut possimus veritatis eum libero
              deleniti ab illo optio
            </p>
          </Col>
          <Col lg={3} sm={3} xs={3}>
           
          </Col>
        </Row>
        <Row className="d-flex justify-content-between position-relative zindex ">
          <Slider/>
        </Row>
      </Container>
    </div>
  );
}

export default secondPart;
