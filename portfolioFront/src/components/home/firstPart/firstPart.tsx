import { useEffect, useRef, useState } from "react";
import "../../../css/firstPart.css";
import { Container, Row, Col } from "react-bootstrap";
import { motion, Variants } from "framer-motion";
import { BrowserView, MobileView } from "react-device-detect";
import ScrollText from "./ScrollText";
import gsap from "gsap";
import ArrowDown from "./ArrowDown";
//const axios = require('axios'); // legacy way

function FirstPart({
  homes,
  isLoadingHome,
}: {
  homes: any;
  isLoadingHome: boolean;
}) {
  const isLoading = isLoadingHome;

  useEffect(() => {
    gsap.to(".title", {
      x: 300,

      scrollTrigger: {
        trigger: ".start",
        start: "top 90%",
        end: "top",
        scrub: true,
        markers: false,
      },
    });
    gsap.to(".title2", {
      x: 600,

      scrollTrigger: {
        trigger: ".start",
        start: "top 90%",
        end: "top",
        scrub: true,
        markers: false,
      },
    });
    gsap.to(".title3", {
      x: 900,

      scrollTrigger: {
        trigger: ".start",
        start: "top 90%",
        end: "top",
        scrub: true,
        markers: false,
      },
    });
    gsap.to(".title4", {
      x: -600,

      scrollTrigger: {
        trigger: ".start",
        start: "top 90%",
        end: "top",
        scrub: true,
        markers: false,
      },
    });
  }, [isLoading]);

  const rowVariants: Variants = {
    offscreen1: {
      opacity: 0,
      y: 100,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 2,
      },
    },
  };

  return (
    <section className="firstPart">
      <BrowserView>
        <motion.div
          className="container text-center"
          initial="offscreen1"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
        >
          <Row className="firstRow d-flex align-items-center">
            <Col className="name--col">
              <motion.div
                variants={rowVariants}
                className="namePart tryguy noSelect"
              >
                {!isLoading && homes && (
                  <h2 className="title" key={homes[0].attributes.title}>
                    {homes[0].attributes.title}
                  </h2>
                )}
              </motion.div>
              <motion.div
                variants={rowVariants}
                className="favorite tryguy noSelect"
              >
                <h2 className="title3 m-0 fw-light">Your Favorite Developer</h2>
              </motion.div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="arrow bounce noSelect start d-flex justify-content-center align-items-center">
                <ScrollText size={100} />
                <ArrowDown size={50} className="position-absolute" />
              </div>
            </Col>
          </Row>
        </motion.div>
      </BrowserView>
      <MobileView>
        <Container>
          <Row className="firstRow d-flex align-items-center">
            <Col className="name--col">
              <div className="namePart tryguy noSelect">
                {!isLoading && homes && (
                  <h2 className="title" key={homes[0].attributes.title}>
                    {homes[0].attributes.title}
                  </h2>
                )}
              </div>
              <div className="favorite tryguy noSelect">
                <h2 className="title3 m-0">Your Favorite Developer</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="arrow bounce noSelect start"></div>
            </Col>
          </Row>
        </Container>
      </MobileView>
    </section>
  );
}

export default FirstPart;
