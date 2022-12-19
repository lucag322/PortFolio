import React, { useState, useEffect, useRef } from "react";
import "./../../css/fifthPart.css";
import cloud from "./../../img/cloud.png";
import { Container, Row, Col } from "react-bootstrap";
import { Controller, Scene } from "react-scrollmagic";
import ContacteForm from "./ContacteForm";
import { useAnimation, motion } from "framer-motion";
import gsap from "gsap";

function FifthPart() {
  useEffect(() => {
    gsap.set(".contact", { scale: 0 });
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
    <section className="FifthPart d-flex align-items-center">
      <Container className="contact">
        <Row className="pb-5">
          <Col lg={6} sm={6} xs={6}>
         <h2 className="namePart contact-title"> You have a project ? contact me</h2>
          </Col>
          <Col lg={6} sm={6} xs={6}>
            <div className="contacteForm">
              <ContacteForm />
            </div>
          </Col>
        </Row>
        <Row>
          <a className="mail" href="mailto:luca.grousset@gmail.com">luca.grousset@gmail.com</a>
        </Row>
      </Container>
    </section>
  );
}

export default FifthPart;
