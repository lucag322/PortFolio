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
import {
  Link,
  animateScroll,
  Element as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function fourthPart({
  homes,
  isLoadingHome,
}: {
  homes: any;
  isLoadingHome: boolean;
}) {
  const isLoading = isLoadingHome;

  function scrollBack() {
    var Html = document.querySelector(".html");
    if (Html != null) {
      Html.classList.remove("noscroll");
    }
  }

  //get the screen width
  const [width, setWidth] = useState(window.innerWidth);

  const cardVariants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    offscreen2: {
      x: width,
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
      <Container fluid className="py-5 mx-md-4 mx-lg-5 ">
        <Row>
          <Col md={8} className="">
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
                      className=" zindex-sticky aboutText"
                      key={item.attributes.about}
                    >
                      Je suis <b className="boldName">Luca Grousset</b>, un
                      jeune développeur web passionné. J'aime créer des sites
                      web <span className="spotlightText">interactifs</span>{" "}
                      avec des animations et une réel{" "}
                      <span className="spotlightTextBorder">expériences</span>{" "}
                      utilisateur. J'adore voyager et apprendre de nouvelles
                      choses.{" "}
                      <Link
                        activeClass="active"
                        to={"contacte"}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={0}
                        onClick={() => scrollBack()}
                        className="spotlightTextBold"
                      >
                        Contactez-moi
                      </Link>{" "}
                      pour un site web unique et mémorable.
                    </motion.p>
                  ))}
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
              </motion.div>
            </Col>
          </Row>
        </div>
      </BrowserView>
    </section>
  );
}

export default fourthPart;
