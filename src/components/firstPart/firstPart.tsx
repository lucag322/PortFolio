import react, { useEffect, useRef } from "react";
import "./../../css/firstPart.css";
import { Container, Row, Col } from "react-bootstrap";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

function FirstPart() {

  useEffect(() => {

    gsap.to(".title", {
      x: 300,
  
      scrollTrigger: {
        trigger: ".start",
        start: "top 800px",
        end: "top",
        scrub: true,
        markers: false,
      },
    });
    gsap.to(".title2", {
      x: -300,

  
      scrollTrigger: {
        trigger: ".start",
        start: "top 800px",
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
      <Container>
        <Row ref={ref} className="firstRow">
          <Col>
            <div className="namePart noSelect">
              <h2 className="title m-0 fw-light">Luca Grousset</h2>
            </div>
            <div className="favorite noSelect">
              <h2 className="title2 m-0 fw-light fst-italic">Your Favorite</h2>
            </div>
            <div className="frontend noSelect">
              <h2 className="title m-0 fw-light">FrontEnd</h2>
            </div>
            <div className="favorite noSelect">
              <h2 className="title2 m-0 fw-light fst-italic ">
                Developer
              </h2>
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
