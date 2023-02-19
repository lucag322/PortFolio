import React from "react";
import { useEffect, useRef, useState } from "react";
import { Route, Link, Routes, useParams } from "react-router-dom";
import "../../css/project.css";
import { Container, Col, Row } from "react-bootstrap";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAnimation, motion, Variants } from "framer-motion";
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import Hours from "../home/firstPart/Hours";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";



function Project() {


  const navigate = useNavigate();
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [projet, setProjet] = useState<any>([null]);
  var config = {
    headers: {
      Accept: "application/json",
    },
  };

  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get(
        `https://back.lucagrousset.eu/api/projets/${id}?populate=*`,
        config
      )
      .then((res) => {
        setProjet(Object.values(res.data.data));
        setIsLoading(false);
        console.log(res.data);
      })

      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

console.log('propro',projet);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);





  const rowVariants: Variants = {
    offscreen1: {
      opacity: 0,
      x: -300,
    },
    offscreen2:{
      opacity: 0,
      y: 300,
    },
    offscreen3: {
      opacity: 0,
      x: 300,
    },
    onscreen: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };

if(!isLoading) return (

    <div className="Projet-page">
      <BrowserView>
        <Hours />
      </BrowserView>
      <div className="container pt-3">
        <Row className="switch blueswitch py-3">
          <Col className="text-center mt-5">
            {isLoading
              ? "loading"
              : (
                      <video
                        autoPlay
                        loop
                        muted
                        id="video"
                        className="ratio-16x9 w-100"
                      >
                        <source
                          key={projet[1].presentation.data.attributes.url}
                          src={`https://back.lucagrousset.eu${projet[1].presentation.data.attributes.url}`}
                          type="video/mp4"
                        />
                      </video>
                    )
                }
          </Col>
        </Row>
      </div>
      <Container className="panel1 ">
        {isLoading
          ? "loading"
          : (
              <Row className=" mt-5">
                <Col md={6}>
                  <Row>
                    <Col className="text-center">
                      <h3 key={projet[1].title} className="page-title">{projet[1].title}</h3>
                    </Col>
                  </Row>
                  <Row className="switch blueswitch">
                    <Col className="d-grid text-center">
                      <span className="role">Design by</span>
                      {isLoading? "loading": (
                     <span key={projet[1].designby} className="roleName">{projet[1].designby}</span>
                      )}
                     
                    </Col>
                    <Col className="d-grid text-center">
                    <span className="role">Année</span>
                    <span className="roleName">2023</span>
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>
                <motion.div
                  initial="offscreen3"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 1 }}
                  className="col d-flex align-items-center">
                  {isLoading? "loading": (
                    <motion.p variants={rowVariants} className="descProject"  key={projet[1].projectDescription}>
                      {projet[1].projectDescription}
                    </motion.p>
                      )}
                  </motion.div>
                </Col>
              </Row>
            )}
      </Container>
        <Container className="py-3 secondProject pane2">
        <Row className=" switch whiteswitch py-3 ">
          <Col md={6}>
          <motion.div className="text-align-center mt-5" initial="offscreen1" whileInView="onscreen" viewport={{ once: true, amount: 1 }} >
              {isLoading? "loading": (
                  <motion.img className="w-100" key={projet[1].leftimage.data.attributes.url}variants={rowVariants} src={`https://back.lucagrousset.eu${projet[1].leftimage.data.attributes.url}`}/>
              )}
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div className="mt-5" initial="offscreen3" whileInView="onscreen" viewport={{ once: true, amount: 1 }} >
              {isLoading? "loading": (
                  <motion.img className="w-100" key={projet[1].rightimage.data.attributes.url}variants={rowVariants} src={`https://back.lucagrousset.eu${projet[1].rightimage.data.attributes.url}`}/>
              )}
            </motion.div>
          </Col>
        </Row>
        <Row className="py-5 switch whiteswitch">
          <motion.div
            initial="offscreen2"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            className="col text-center"
          >
            {isLoading
              ? "loading"
              : (
                 
                      <motion.img
                        key={projet[1].lastimage.data.attributes.url}
                        variants={rowVariants}
                        src={`https://back.lucagrousset.eu${projet[1].lastimage.data.attributes.url}`}
                        className="w-100"
                      />
                    
                )}
          </motion.div>
        </Row>
        <Row>
          <Col>
          <Col>
              <div className="w-100 nextproject-box text-end pb-3">

              </div>
          </Col>
          </Col>
        </Row>
      </Container>
    </div>
)
else return <div>loading</div>
}

export default Project;
