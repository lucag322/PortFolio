import React, { useState, useEffect, useRef } from "react";
import "../../../css/fourthPart.css";
import { Container, Row, Col } from "react-bootstrap";
import star from "../../../img/rrr.svg";
import { useAnimation, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";

function fourthPart() {
  const [isLoading, setIsLoading] = useState(true);
  const [homes, setHomes] = useState<any>([null]);
  var config = {
    headers: {
      Accept: "application/json",
    },
  };

  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get("https://back.lucagrousset.eu/api/tests", config)
      .then((res) => {
        setHomes(Object.values(res.data.data));
        setIsLoading(false);
      })

      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const cardVariants: Variants = {
    offscreen: {
      y: 100,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="fourthPart ">
      <Container className="py-5">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="row"
        >
          <Col lg={4} sm={4} xs={4} className=" p-0">
            <img src={star} alt="" className="rrr" />
          </Col>
          <Col lg={8} sm={8} xs={8} className="">
            <motion.h2
              variants={cardVariants}
              className="partName  fw-light fst-italic pt-2 position-relative text-end"
              id="Titre"
            >
              about me
            </motion.h2>
            {isLoading
              ? "loading"
              : homes.map((item: any) => (
                  <motion.p
                    variants={cardVariants}
                    className="yrsa position-relative zindex-sticky aboutText"
                    key={item.attributes.about}
                  >
                    {" "}
                    {item.attributes.about}
                  </motion.p>
                ))}
          </Col>
        </motion.div>
      </Container>
      <Row className="pb-5">
        <Col lg={12} sm={12} xs={12} className=" p-0">
          <div className="messagedefilant">
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
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default fourthPart;
