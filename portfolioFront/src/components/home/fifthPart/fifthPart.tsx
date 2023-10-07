import React, { useState, useEffect, useRef } from "react";
import "../../../css/fifthPart.css";
import ArrowUpRight from "./Arrow_rigth_up";
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
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="contacte" className="FifthPart d-flex align-items-center">
      <Container fluid className="contact m-5 d-flex justify-content-center ">
        <Row className="pb-5 w-100">
          <Col className="d-flex align-items-center">
            <div className="wrapper">
              <div className="contact w-100 h-100">
                <div className="contact_title_wrapper">
                  <div className="contact_title">contact</div>
                </div>
                <div className="btn_wrapper pt-3">
                  <motion.div
                    variants={blockContactVariant}
                    whileHover="hover"
                    className="contact_btn_left w-50"
                  >
                    <span className="contact_btn_title">Mail</span>
                    <div className="contact_btn_title_icon">
                      <ArrowUpRight width={52} height={52} color="white" />
                    </div>
                  </motion.div>
                  <motion.div
                    variants={blockContactVariant}
                    whileHover="hover"
                    className="contact_btn_right w-50 me-3"
                  >
                    <span className="contact_btn_title">Tél</span>
                    <div className="contact_btn_title_icon">
                      <ArrowUpRight width={52} height={52} color="#001829" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FifthPart;
