import React, { useState, useEffect, useRef } from "react";
import "./../../css/fourthPart.css";
import { Container, Row, Col } from "react-bootstrap";
import star from "./../../img/rrr.svg";
import blob2 from "./../../img/blob2.svg";
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
          bounce: 0.2,
        },
      });
      animation2.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.2,
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
          <motion.h2
            animate={animation1}
            className="partName  fw-light fst-italic pt-2 position-relative text-end"
          >
            about
          </motion.h2>
        </Row>
        <Row ref={ref}>
          <Col lg={4} sm={4} xs={4} className=" p-0">
            <img src={star} alt="" className="rrr" />
          </Col>
          <Col lg={8} sm={8} xs={8} className="d-flex align-items-center">
            <motion.p
              animate={animation2}
              className="yrsa position-relative zindex-sticky aboutText"
            >
              Lorem ipsum dolor sit amet.Sed beatae quas sit fugit fugiat sit
              placeat doloribus ut eius atque est odio voluptates. Ut possimus
              veritatis eum libero deleniti ab illo optio Lorem ipsum dolor sit
              amet.Sed beatae quas sit fugit fugiat sit placeat doloribus ut
              eius atque est odio voluptates. Ut possimus veritatis eum libero
              deleniti ab illo optio
            </motion.p>
          </Col>
        </Row>
      </Container>
      <Row className="pb-5">
        <Col lg={12} sm={12} xs={12} className=" p-0">
          <div className="messagedefilant">
            <div data-text="Voici un texte qui doit défiler horizontalement. Il peut etre encore plus long !---">
              <span>
                Voici un texte qui doit défiler horizontalement. Il peut etre
                encore plus long !---
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default fourthPart;
