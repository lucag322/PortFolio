import React, { useState, useEffect, useRef } from "react";
import "./../../css/fifthPart.css";
import cloud from "./../../img/cloud.png";
import { Container, Row, Col } from "react-bootstrap";
import { Controller, Scene } from "react-scrollmagic";
import ContacteForm from "./ContacteForm";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function FifthPart() {
  const { ref, inView } = useInView();
  const animation1 = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation1.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.2,
        },
      });
      animation2.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.2,
        },
      });
    }
    if (!inView) {
      animation1.start({ x: "-100vw" });
      animation2.start({ x: "-200vw" });
    }
  }, [inView]);

  return (
    <div className="FifthPart">
      <Container className="">
        <Row ref={ref} className="pb-5">
          <Col lg={12} sm={12} xs={12}>
            <motion.h2
              animate={animation1}
              className="partName  fw-light fst-italic pt-2 position-relative zindex-sticky"
            >
              Contact
            </motion.h2>
            <motion.div animate={animation2} className="contacteForm mt-3">
              <ContacteForm />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FifthPart;
