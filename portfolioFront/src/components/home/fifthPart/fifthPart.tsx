import React, { useState, useEffect, useRef } from "react";
import "../../../css/fifthPart.css";
import ArrowUpRight from "./Arrow_rigth_up";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { isBrowser, isMobile } from "react-device-detect";
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
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };
  if (isBrowser) {
    return (
      <section id="contacte" className="FifthPart d-flex align-items-center">
        <Container
          fluid
          className="contact mx-md-4 mx-lg-5 d-flex justify-content-center "
        >
          <Row className="pb-5 w-100">
            <Col className="d-flex align-items-center">
              <div className="wrapper">
                <div className="contact w-100 h-100">
                  <div className="contact_title_wrapper">
                    <div className="contact_title">contact</div>
                  </div>
                  <div className="btn_wrapper pt-3">
                    <motion.a
                      variants={blockContactVariant}
                      whileHover="hover"
                      target="_blank"
                      className="contact_btn_left contact-link w-50"
                      href="mailto:luca.grousset@gmail.com"
                    >
                      <span className="contact_btn_title">Mail</span>
                      <div className="contact_btn_title_icon">
                        <ArrowUpRight width={52} height={52} color="white" />
                      </div>
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/luca-grousset-b9122a1b5"
                      target="_blank"
                      variants={blockContactVariant}
                      whileHover="hover"
                      className="contact_btn_right contact-link-white w-50 me-3"
                    >
                      <span className="contact_btn_title">Linkedin</span>
                      <div className="contact_btn_title_icon">
                        <ArrowUpRight width={52} height={52} color="#001829" />
                      </div>
                    </motion.a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  } else if (isMobile) {
    return (
      <section id="contacte" className="FifthPart d-flex align-items-center">
        <p>Test</p>
      </section>
    );
  } else {
    return <p>Device not know</p>;
  }
}

export default FifthPart;
