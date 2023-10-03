import React, { useState, useEffect, useRef } from "react";
import "../../../css/fifthPart.css";
import AvionIcon from "./Avion";
import PhoneIcon from "./Phone";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
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

  const blockContactVariant = {
    hover: {
      scale: 1.03,
    },
  };

  return (
    <section id="contacte" className="FifthPart d-flex align-items-center">
      <Container
        fluid
        className="contact m-5 m-vh-100 d-flex justify-content-center "
      >
        <Row className="pb-5 w-100">
          <Col className="wrapper">
            <div className="one contact-col">
              <div>
                <h2 className="namePart contact-title">
                  un projet ? Contactez moi !
                </h2>
              </div>
            </div>
            <motion.div
              whileHover="hover"
              variants={blockContactVariant}
              className="two contact-col"
            >
              <div className="bloc-contact">
                <AvionIcon width="20%" height="auto" />
                <h4>MaiL</h4>
              </div>
            </motion.div>
            <motion.div
              whileHover="hover"
              variants={blockContactVariant}
              className="three contact-col"
            >
              <div className="bloc-contact">
                <PhoneIcon width="20%" height="auto" />
                <h4>Tél</h4>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FifthPart;
