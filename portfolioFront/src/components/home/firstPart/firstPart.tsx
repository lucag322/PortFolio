import { useEffect, useRef, useState } from "react";
import "../../../css/firstPart.css";
import { Container, Row, Col } from "react-bootstrap";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import axios from "axios";
//const axios = require('axios'); // legacy way

function FirstPart() {
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

  useEffect(() => {
    gsap.to(".title", {
      x: 300,

      scrollTrigger: {
        trigger: ".start",
        start: "top 90%",
        end: "top",
        scrub: true,
        markers: true,
      },
    });
    gsap.to(".title2", {
      x: -300,

      scrollTrigger: {
        trigger: ".start",
        start: "top 90%",
        end: "top",
        scrub: true,
        markers: false,
      },
    });
  }, []);

  const { ref, inView } = useInView();
  const animation1 = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation1.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
      animation2.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 10,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation1.start({ x: "-100vw" });
      animation2.start({ x: "50vw" });
    }
  }, [inView]);

  return (
    <section className="firstPart">
      <Container ref={ref}>
        <Row className="firstRow d-flex align-items-center">
          <Col className="name--col">
            <div className="namePart tryguy noSelect">
              {isLoading
                ? "loading"
                : homes.map((item: any) => (
                    <h2 className="title" key={item.attributes.title}>
                      {item.attributes.title}
                    </h2>
                  ))}
            </div>
            <div className="favorite tryguy noSelect">
              <h2 className="title2 m-0 fw-light fst-italic">Your Favorite</h2>
            </div>
            <div className="frontend noSelect">
              <h2 className="title m-0 fw-light">FrontEnd</h2>
            </div>
            <div className="favorite noSelect">
              <h2 className="title2 m-0 fw-light fst-italic ">Developer</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="arrow bounce noSelect start"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FirstPart;
