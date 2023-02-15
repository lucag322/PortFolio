import React, { useState, useEffect, useRef } from "react";
import "../../../css/fifthPart.css";
import Avion from "../../../img/avions.svg";
import { Container, Row, Col } from "react-bootstrap";
import { Controller, Scene } from "react-scrollmagic";
import ContacteForm from "./ContacteForm";
import { useAnimation, motion } from "framer-motion";
import gsap from "gsap";

function FifthPart() {
  const planeMotion = {
    default: {
      x: 0,
      y: 0,
    },
    hover: {
      x: 50,
      y: -30,
    },
  };
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
          <Col md={6}>
            <h2 className="namePart contact-title">
              {" "}
              You have a project ? contact me
            </h2>
          </Col>
          <Col md={6}>
            <div className="contacteForm">
              <ContacteForm />
            </div>
          </Col>
        </Row>
        <Row>
          <motion.div
            initial="default"
            whileHover="hover"
            animate="rest"
            className="col"
          >
            <motion.svg
              variants={planeMotion}
              width="24"
              height="24"
              viewBox="0 0 512.005 512.005"
            >
              <path
                d="M511.658 51.675c2.496-11.619-8.895-21.416-20.007-17.176l-482 184a15 15 0 00-.054 28.006L145 298.8v164.713a15 15 0 0028.396 6.75l56.001-111.128 136.664 101.423c8.313 6.17 20.262 2.246 23.287-7.669C516.947 34.532 511.431 52.726 511.658 51.675zm-118.981 52.718L157.874 271.612 56.846 232.594zM175 296.245l204.668-145.757c-176.114 185.79-166.916 176.011-167.684 177.045-1.141 1.535 1.985-4.448-36.984 72.882zm191.858 127.546l-120.296-89.276 217.511-229.462z"
                fill="#1b3b6f"
              ></path>
            </motion.svg>
            <a className="mail px-2" href="mailto:luca.grousset@gmail.com">
              luca.grousset@gmail.com
            </a>
          </motion.div>
        </Row>
      </Container>
    </section>
  );
}

export default FifthPart;
