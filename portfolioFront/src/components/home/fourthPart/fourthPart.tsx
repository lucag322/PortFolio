import React, { useState, useEffect, useRef } from "react";
import "../../../css/fourthPart.css";
import { Container, Row, Col } from "react-bootstrap";
import star from "../../../img/rrr.svg";
import { useAnimation, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import axios from "axios";

function fourthPart({
  homes,
  isLoadingHome,
}: {
  homes: any;
  isLoadingHome: boolean;
}) {
  const isLoading = isLoadingHome;

  const cardVariants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    offscreen2: {
      x: 500,
    },
    onscreen1: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
    onscreen2: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
    onscreen3: {
      x: 0,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
  };

  return (
    <section className="fourthPart ">
      <Container className="py-5">
        <Row>
          <Col md={8} className="">
            <motion.div
              initial="offscreen"
              whileInView={"onscreen1"}
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.h2
                variants={cardVariants}
                className="partName  fw-light fst-italic pt-2"
                id="Titre"
              >
                about me
              </motion.h2>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView={"onscreen1"}
              viewport={{ once: true, amount: 0.8 }}
            >
              {isLoading
                ? "loading"
                : homes.map((item: any) => (
                    <motion.p
                      variants={cardVariants}
                      className="yrsa position-relative zindex-sticky aboutText"
                      key={item.attributes.about}
                    >
                      {item.attributes.about}
                    </motion.p>
                  ))}
            </motion.div>
          </Col>
          <Col lg={4} sm={4} xs={4} className=" p-0 d-none d-md-block">
            <motion.div
              initial="offscreen"
              whileInView={"onscreen2"}
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.img
                src={star}
                variants={cardVariants}
                className="rrr"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
      <BrowserView>
        <div className="text-defile d-flex justify-content-center align-items-center">
          <Row className="pb-5 w-100">
            <Col lg={12} sm={12} xs={12} className=" p-0">
              <motion.div
                initial="offscreen2"
                whileInView={"onscreen3"}
                viewport={{ once: true, amount: 0.8 }}
              >
                <motion.div
                  variants={cardVariants}
                  className="messagedefilant2"
                >
                  {isLoading
                    ? "loading"
                    : homes.map((item: any) => (
                        <div
                          className="noSelect"
                          key={item.attributes.texteDefile}
                          data-text={item.attributes.texteDefile}
                        >
                          <span className="noSelect">
                            {" "}
                            {item.attributes.texteDefile}{" "}
                          </span>
                        </div>
                      ))}
                </motion.div>
                <motion.div variants={cardVariants} className="messagedefilant">
                  {isLoading
                    ? "loading"
                    : homes.map((item: any) => (
                        <div
                          className="noSelect"
                          key={item.attributes.texteDefile}
                          data-text={item.attributes.texteDefile}
                        >
                          <span className="noSelect">
                            {" "}
                            {item.attributes.texteDefile}{" "}
                          </span>
                        </div>
                      ))}
                </motion.div>
                <motion.div
                  variants={cardVariants}
                  className="messagedefilant2"
                >
                  {isLoading
                    ? "loading"
                    : homes.map((item: any) => (
                        <div
                          className="noSelect"
                          key={item.attributes.texteDefile}
                          data-text={item.attributes.texteDefile}
                        >
                          <span className="noSelect">
                            {" "}
                            {item.attributes.texteDefile}{" "}
                          </span>
                        </div>
                      ))}
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </div>
      </BrowserView>
    </section>
  );
}

export default fourthPart;
