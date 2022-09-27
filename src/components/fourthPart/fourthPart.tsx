import React, { useState, useEffect, useRef } from "react";
import "./../../css/fourthPart.css";
import { Container, Row, Col } from "react-bootstrap";
import monstera from "./../../img/monstera.png";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function fourthPart() {
  
  const { ref, inView } = useInView();
  const animation1 = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation1.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
      animation2.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation1.start({ x: "100vw" });
      animation2.start({ x: "200vw" });
    }
  }, [inView]);


  return (
    <div className="fourthPart">
      <Container className="py-5">
        <Row className="buble3" ref={ref}>
          <motion.h2 animate={animation1} className="partName  fw-light fst-italic pt-2 position-relative text-end">
            about
          </motion.h2>
        </Row>
        <Row ref={ref}>
          <Col lg={4} sm={4} xs={4} className=" p-0">
            <img src={monstera} alt="" className="monsteraIMG" />
          </Col>
          <Col lg={8} sm={8} xs={8} className="d-flex align-items-center">
            <motion.p animate={animation2} className="yrsa position-relative zindex-sticky aboutText">
              Lorem ipsum dolor sit amet.Sed beatae quas sit fugit fugiat sit
              placeat doloribus ut eius atque est odio voluptates. Ut possimus
              veritatis eum libero deleniti ab illo optio Lorem ipsum dolor sit
              amet.Sed beatae quas sit fugit fugiat sit placeat doloribus ut
              eius atque est odio voluptates. Ut possimus veritatis eum libero
              deleniti ab illo optio
            </motion.p>
          </Col>
        </Row>
        <Row className="pb-5 pt-2">
          <Col lg={8} sm={8} xs={8} className="d-flex align-items-center">
           
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
