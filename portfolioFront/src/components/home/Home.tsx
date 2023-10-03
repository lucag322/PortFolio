import "./../../css/home.css";
import { motion } from "framer-motion";
import FirstPart from "./firstPart/firstPart";
import SecondPart from "./secondPart/secondPart";
import ThirdPart from "./thirdPart/thirdPart";
import FourthPart from "./fourthPart/fourthPart";
import FifthPart from "./fifthPart/fifthPart";
import Hours from "./firstPart/Hours";
import Menu from "./firstPart/menu";
import "./../../css/thirdPart.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [isLoadingHome, setIsLoadingHome] = useState(true);
  const [homes, setHomes] = useState<any>([null]);
  const [isLoadingProjet, setIsLoadingProjet] = useState(true);
  const [projet, setProjet] = useState<any>([null]);
  const [opacity, setOpacity] = useState(0);

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
        setIsLoadingHome(false);
      })

      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get("https://back.lucagrousset.eu/api/projets?populate=deep", config)
      .then((res) => {
        setProjet(Object.values(res.data.data));
        setIsLoadingProjet(false);
      })

      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  if (isBrowser) {
    useEffect(() => {
      function blue() {
        const body: any = document.querySelector("body");
        const menu: any = document.querySelector(".btnOpen");
        const partname: any = document.querySelector("#Titre");
        const hiddebarmenu: any = document.querySelector(".hiddebarmenu");
        const hiddebartime: any = document.querySelector(".hiddebartime");
        const heure: any = document.querySelector(".heure");
        const navbar: any = document.querySelector(".navbarr");
        const navName: any = document.querySelector(".nav-name");

        let observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                entry.isIntersecting &&
                entry.target.classList.contains("blueswitch")
              ) {
                body.classList.add("bluemode");
                menu.classList.add("bluemodemenue");
                partname.classList.add("bluemodename");
                hiddebarmenu.classList.add("hidde");
                hiddebartime.classList.add("hidde");
                heure.classList.add("bluemodeheure");
                navbar.classList.add("bluemodenav");
                navName.classList.add("bluemodename");
                setOpacity(1);
              } else if (
                entry.isIntersecting &&
                entry.target.classList.contains("whiteswitch")
              ) {
                setOpacity(0);
                body.classList.remove("bluemode");
                menu.classList.remove("bluemodemenue");
                partname.classList.remove("bluemodename");
                hiddebarmenu.classList.remove("hidde");
                hiddebartime.classList.remove("hidde");
                heure.classList.remove("bluemodeheure");
                navbar.classList.remove("bluemodenav");
                navName.classList.remove("bluemodename");
              }
            });
          },
          {
            rootMargin: "-47% 0px -47% 0px",
          }
        );

        let target = ".swictch";
        document.querySelectorAll(target).forEach((i) => {
          if (i) {
            observer.observe(i);
          }
        });
      }

      blue();
    }, []);
  }
  const loadingContainer = {
    width: "20vw",
    height: "20vh",
    display: "flex",
    justifyContent: "space-around",
  };
  const loadingCircle = {
    display: "block",
    width: "5rem",
    height: "5rem",
    backgroundColor: "#FFF",
    borderRadius: "50px",
  };

  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const loadingCircleVariants = {
    start: {
      y: "0%",
    },
    end: {
      y: "60%",
    },
  };
  const loadingCircleTransition: any = {
    duration: 0.6,
    repeatType: "reverse",
    repeat: Infinity,
    ease: "easeInOut",
  };

  if (isLoadingHome || isLoadingProjet) {
    return (
      <div className="bounc-loader w-100 vh-100">
        <div className="d-flex justify-content-center align-items-center vh-100 position-absolute w-100">
          <div>
            <motion.div
              style={loadingContainer}
              variants={loadingContainerVariants}
              initial="start"
              animate="end"
            >
              <motion.span
                style={loadingCircle}
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
              ></motion.span>
              <motion.span
                style={loadingCircle}
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
              ></motion.span>
              <motion.span
                style={loadingCircle}
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
              ></motion.span>
            </motion.div>
          </div>
        </div>
      </div>
    );
  } else if (!isLoadingHome && !isLoadingProjet) {
    return (
      <>
        <BrowserView>
          <Hours />
          <div className="hiddebarmenu "></div>
          <div className="hiddebartime"></div>
        </BrowserView>
        <Row name="top" className="swictch whiteswitch">
          <FirstPart homes={homes} isLoadingHome={isLoadingHome} />
        </Row>
        <Row name="about" className="swictch whiteswitch">
          <FourthPart homes={homes} isLoadingHome={isLoadingHome} />
        </Row>
        <Col name="project" className="swictch blueswitch mb-5">
          <ThirdPart projet={projet} isLoadingProjet={isLoadingProjet} />
        </Col>
        <Row name="contact" className=" swictch whiteswitch">
          <FifthPart />
        </Row>
        <Row name="contact" className=" swictch whiteswitch">
          <Col lg={6} sm={6} xs={6} className="footerLeft text-left">
            <span className="px-5">2023</span>
          </Col>
          <Col lg={6} sm={6} xs={6} className="footerRight text-md-end">
            <span className="px-3 px-md-5 ">Grousset Luca</span>
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;
