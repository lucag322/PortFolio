import React, { useState, useEffect, useRef } from "react";
import Slider from "./slider";
import "./../../css/secondPart.css";
import { Container, Row, Col } from "react-bootstrap";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function secondPart() {
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
      animation1.start({ x: "-50vw" });
      animation2.start({ x: "-100vw" });
    }
  }, [inView]);

  return (
    <div className="secondPart skillsTitle pb-5">
      <Container>
        <Row className="pb-5" >
          <Col lg={9} sm={9} xs={9}>
            <motion.h2 
             
              animate={animation1}
              className="partName  fw-light fst-italic pt-3 position-relative zindex-sticky"
            >
              {" "}
              Skills
            </motion.h2>
            <motion.p
              animate={animation2}
              className="yrsa position-relative zindex-sticky"
            >
              Lorem ipsum dolor sit amet.Sed beatae quas sit fugit fugiat sit
              placeat doloribus ut eius atque est odio voluptates. Ut possimus
              veritatis eum libero deleniti ab illo optio Lorem ipsum dolor sit
              amet.Sed beatae quas sit fugit fugiat sit placeat doloribus ut
              eius atque est odio voluptates. Ut possimus veritatis eum libero
              deleniti ab illo optio
            </motion.p>
          </Col>
          <Col lg={3} sm={3} xs={3}></Col>
        </Row>
      </Container>
      <Container className="carrousel" ref={ref}>
        <Row
          className="d-flex justify-content-between position-relative zindex "
          id="drag"
        >
          <Slider />
        </Row>
      </Container>
    </div>
  );
}

export default secondPart;
