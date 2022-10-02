import react, { useEffect, useRef } from "react";
import "./../../css/firstPart.css";
import { Container, Row, Col } from "react-bootstrap";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";


function FirstPart() {


  gsap.to(".b", {
    x: 400,
    rotation: 360,
    scrollTrigger: {
      trigger: ".b",
      start: "top center",
      end: "top 100px",
      scrub: true,
      markers: false,
    }
  });

  gsap.to(".title", {
    x: 400,
   
    scrollTrigger: {
      trigger: ".start",
      start: "top 600px",
      end: "top 100",
      scrub: true,
      markers: true,
    }
  });
  gsap.to(".title2", {
    x: -400,
   
    scrollTrigger: {
      trigger: ".start",
      start: "top 600px",
      end: "top 100",
      scrub: true,
      markers: true,
    }
  });


  
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
    <div className="firstPart">
        <Container>
          <Row ref={ref} className="firstRow">
            <Col>
              <div className="namePart noSelect">
                <h2  className="title m-0 fw-light">Luca Grousset</h2>
              </div>
              <div className="favorite noSelect">
                <h2 className="title2 m-0 fw-light fst-italic">Your Favorite</h2>
              </div>
              <div className="frontend noSelect">
                <h2 className="title m-0 fw-light">FrontEnd</h2>
              </div>
              <div className="favorite noSelect">
                <h2 className="title2 start m-0 fw-light fst-italic">Developer</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="arrow bounce noSelect"></div>
            </Col>
          </Row>
        </Container>
      
      </div>
  );
}

export default FirstPart;
