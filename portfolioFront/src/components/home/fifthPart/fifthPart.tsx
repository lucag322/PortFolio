import React, { useState, useEffect, useRef } from "react";
import "../../../css/fifthPart.css";
import AvionIcon from "./Avion";
import PhoneIcon from "./Phone";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import gsap from "gsap";

function FifthPart({
  homes,
  isLoadingHome,
}: {
  homes: any;
  isLoadingHome: boolean;
}) {
  const isLoading = isLoadingHome;

  useEffect(() => {
    console.log("homes", homes);
  }, [homes]);

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
        className="contact m-5 mb-3 m-vh-100 d-flex justify-content-center "
      >
        <Row className="pb-5 w-100">
          <Col className="wrapper">
            <div className="one contact-col p-4">
              <div>
                <h2 className="namePart contact-title">
                  un projet ? Contactez moi !
                </h2>
              </div>
            </div>
            <motion.a
              href="https://www.linkedin.com/in/valentin-roussel-1b7b751b1/"
              target="_blank"
              whileHover="hover"
              variants={blockContactVariant}
              className="two contact-col p-4"
            >
              <div className="bloc-contact">
                <AvionIcon width="20%" height="auto" />
                <h4>Malt</h4>
              </div>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/valentin-roussel-1b7b751b1/"
              target="_blank"
              whileHover="hover"
              variants={blockContactVariant}
              className="three contact-col p-4"
            >
              <div className="bloc-contact">
                <PhoneIcon width="20%" height="auto" />
                <h4>Tél</h4>
              </div>
            </motion.a>
            <motion.a
              whileHover="hover"
              variants={blockContactVariant}
              className="fore contact-col"
            >
              <div className="bloc-contact h-100">
                <img
                  className="h-100 w-100 object-fit-cover rounded-2"
                  src="https://assets-v2.lottiefiles.com/a/db526298-118a-11ee-9008-c7bc3e9aa9ae/TTLtgYMG9u.png"
                ></img>
              </div>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/valentin-roussel-1b7b751b1/"
              target="_blank"
              whileHover="hover"
              variants={blockContactVariant}
              className="five contact-col p-4"
            >
              <div className="bloc-contact">
                <AvionIcon width="20%" height="auto" />
                <h4>Mail</h4>
              </div>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/valentin-roussel-1b7b751b1/"
              target="_blank"
              whileHover="hover"
              variants={blockContactVariant}
              className="six contact-col p-4"
            >
              <div className="bloc-contact">
                <h4>Github</h4>
              </div>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/valentin-roussel-1b7b751b1/"
              target="_blank"
              whileHover="hover"
              variants={blockContactVariant}
              className="seven contact-col p-4"
            >
              <div className="bloc-contact">
                <h4>Linkedin</h4>
              </div>
            </motion.a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FifthPart;
