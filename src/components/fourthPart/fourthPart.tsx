import React, { useState, useEffect, useRef } from "react";
import "./../../css/fourthPart.css";
import { Container, Row, Col } from "react-bootstrap";
import star from "./../../img/rrr.svg";
import blob2 from "./../../img/blob2.svg";
import { useAnimation, motion,Variants  } from "framer-motion";
import { useInView } from "react-intersection-observer";


function fourthPart() {
  const { ref, inView } = useInView();
  const animation1 = useAnimation();
  const animation2 = useAnimation();

  const cardVariants: Variants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section className="fourthPart ">
      <Container className="py-5">

        <motion.div 
          initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }} 
            className="buble3 row" >

          <motion.h2 variants={cardVariants} className="partName  fw-light fst-italic pt-2 position-relative text-end" id="Titre">
            about
          </motion.h2>

        </motion.div>
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         viewport={{ once: true, amount: 0.8 }}  className="row">
          <Col lg={4} sm={4} xs={4} className=" p-0">
            <img src={star} alt="" className="rrr" />
          </Col>
          <Col lg={8} sm={8} xs={8} className="d-flex align-items-center">
            <motion.p variants={cardVariants}  className="yrsa position-relative zindex-sticky aboutText">
              Lorem ipsum dolor sit amet.Sed beatae quas sit fugit fugiat sit
              placeat doloribus ut eius atque est odio voluptates. Ut possimus
              veritatis eum libero deleniti ab illo optio Lorem ipsum dolor sit
              amet.Sed beatae quas sit fugit fugiat sit placeat doloribus ut
              eius atque est odio voluptates. Ut possimus veritatis eum libero
              deleniti ab illo optio
            </motion.p>
          </Col>
        </motion.div>
      </Container>
      <Row className="pb-5">
        <Col lg={12} sm={12} xs={12} className=" p-0">
          <div className="messagedefilant">
            <div className="noSelect" data-text="Voici un texte qui doit défiler horizontalement. Il peut etre encore plus long !---">
              <span className="noSelect">
                Voici un texte qui doit défiler horizontalement. Il peut etre
                encore plus long !---
              </span>
            </div>
          </div>
        </Col>
      </Row> 
    </section>
  );
}

export default fourthPart;
