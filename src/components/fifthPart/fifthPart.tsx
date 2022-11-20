import React, { useState, useEffect, useRef } from "react";
import "./../../css/fifthPart.css";
import cloud from "./../../img/cloud.png";
import { Container, Row, Col } from "react-bootstrap";
import { Controller, Scene } from "react-scrollmagic";
import ContacteForm from "./ContacteForm";
import { useAnimation, motion } from "framer-motion";
import { gsap } from "gsap";


function FifthPart() {

  useEffect(() => {
    gsap.set(".contact", {scale: 0});
    gsap.to(".contact", {
      
      scale: 1,
      scrollTrigger: {
        trigger: ".start1",
        start: "top 800px",
        end: "top",
        scrub: true,
        markers: false,
      },
    });
    
  }, []);


 

  return (
    <section className="FifthPart start1">
      <Container className="contact">
        <Row className="pb-5">
          <Col lg={12} sm={12} xs={12}>
            <h2
              className="partName  fw-light fst-italic pt-2 position-relative zindex-sticky">
              Contact
            </h2>
            <div className="contacteForm mt-3">
              <ContacteForm />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FifthPart;
