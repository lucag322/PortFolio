import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "../../../css/thirdPart.css";
import gsap from "gsap";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAnimation, motion, Variants } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import ArrowDown from "../firstPart/ArrowDown";
import ScrollText from "../firstPart/ScrollText";
import { Col, Container, Row } from "react-bootstrap";
import ArrowUpRightIcon from "./ArrowUpRight";

function thirdPart({
  projet,
  isLoadingProjet,
}: {
  projet: any;
  isLoadingProjet: boolean;
}) {
  const isLoading = isLoadingProjet;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  gsap.registerPlugin(ScrollTrigger);

  if (isBrowser) {
    const container: any = useRef(null);
    const panels: any = useRef([]);
    const comp = useRef();

    const createPanelsRefs = (panel: any, index: string | number) => {
      panels.current[index] = panel;
    };
    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        const totalPanels = panels.current.length;

        gsap.to(panels.current, {
          xPercent: -100 * (totalPanels - 1),
          ease: "linear",
          scrollTrigger: {
            trigger: container.current,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            scrub: 1,
            snap: {
              snapTo: 1 / (totalPanels - 1),
              duration: { min: 0.1, max: 0.3 },
              delay: 0.001,
              ease: "power3.inOut",
            },
            markers: false,
            end: () => "+=" + container.current.offsetWidth,
          },
        });
      }, comp);

      return () => ctx.revert(); // cleanup
    }, [isLoading && []]);

    let positions: Array<any> = []; // Tableau pour stocker les positions occupées par les images

    const getRandomPosition = () => {
      // Fonction pour générer une position aléatoire non occupée
      let randomX = Math.random() * (700 + 700) - 700;
      let randomY = Math.random() * (250 + 250) - 250;

      while (positions.some((pos) => pos.x === randomX && pos.y === randomY)) {
        // Tant que la position aléatoire générée est déjà occupée, on en génère une nouvelle
        randomX = Math.random() * (700 + 700) - 700;
        randomY = Math.random() * (250 + 2500) - 250;
      }

      positions.push({ x: randomX, y: randomY }); // On ajoute la position générée dans le tableau
      return { x: randomX, y: randomY };
    };
    useEffect(() => {
      console.log("propro", projet);
    }, [isLoading]);
    return (
      <>
        <BrowserView>
          <div className="thirdPart " id="thirdPart" ref={container}>
            <div className="arrow bounce noSelect start d-flex justify-content-center align-items-center scrollProject">
              <ScrollText size={100} />
              <ArrowDown size={50} className="position-absolute" />
            </div>
            {isLoading
              ? "loading"
              : projet.slice(-3).map((item: any, i: any) => {
                  return (
                    <>
                      <div
                        className="projectcontainer panel"
                        ref={(e) => createPanelsRefs(e, i)}
                        key={item.id}
                        id={i}
                      >
                        <div className="projet yrsa  position-relative align-items-center justify-content-center h-100 w-100">
                          <Container className="projetContentContainer h-100">
                            <Row className="">
                              <Col className="p-0">
                                <Container fluid className="h-100">
                                  <Row className="projet_content_row_one mb-2">
                                    <Col className="projet_content_col_one p-0">
                                      <img
                                        className="projet_img"
                                        src={`https://back.lucagrousset.eu${item.attributes.miniature.data.attributes.url}`}
                                        alt=""
                                      />
                                      <div className="projet_content_number_wrapper ">
                                        <div className="projet_content_number">
                                          <h3 className="projet_title yrsa noSelect">
                                            {/* item id  */}
                                            {item.id - 1}
                                          </h3>
                                        </div>
                                      </div>
                                      <div className=" projet_content_title_wrapper ">
                                        <div className="projet_content_title">
                                          <h3
                                            className="projet_title yrsa noSelect"
                                            key={item.attributes.title}
                                          >
                                            {item.attributes.title}
                                          </h3>
                                        </div>
                                      </div>
                                    </Col>
                                  </Row>
                                  <Row className="projet_content_row_two">
                                    <Col
                                      sm={9}
                                      className="projet_content_col_desc"
                                    >
                                      <p
                                        className="projet_description"
                                        key={item.attributes.projectDescription}
                                      >
                                        {item.attributes.projectDescription}
                                      </p>
                                    </Col>
                                    <Col className="projet_content_col_link d-flex justify-content-end">
                                      <div
                                        className="projet_content_link"
                                        onClick={() =>
                                          navigate(`project/${item.id}`)
                                        }
                                      >
                                        <ArrowUpRightIcon size={"150px"} />
                                      </div>
                                    </Col>
                                  </Row>
                                </Container>
                              </Col>
                            </Row>
                          </Container>
                        </div>
                      </div>
                    </>
                  );
                })}
            <div
              className="projectcontainer panel"
              ref={(e) => createPanelsRefs(e, 3)}
              key={3}
              id={"3"}
            >
              <div className="projet yrsa  position-relative d-flex align-items-center justify-content-center">
                <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
                  <div
                    className="title-box "
                    data-speed="1"
                    onClick={() => navigate(`project`)}
                  >
                    <MouseParallaxChild factorX={0.3} factorY={0.5}>
                      <h3 className="voirtout  yrsa noSelect">
                        <span className="card-title position-relative">
                          Voir tout les
                        </span>
                        <span className="card-title position-relative">
                          projets
                        </span>
                      </h3>
                    </MouseParallaxChild>
                  </div>
                </MouseParallaxContainer>
              </div>
            </div>
          </div>
        </BrowserView>
      </>
    );
  } else {
    return (
      <>
        <MobileView>
          <div className="thirdPartMobile">
            <h2 className="mobil-projet-titlebox">Projets</h2>
            {isLoading
              ? "loading"
              : projet.slice(-3).map((item: any, i: any) => (
                  <div
                    className="mobile-project"
                    onClick={() => navigate(`project/${item.id}`)}
                  >
                    <h3
                      className="mobile-projet-title yrsa"
                      key={item.attributes.title}
                    >
                      {item.attributes.title}
                    </h3>
                  </div>
                ))}
          </div>
        </MobileView>
      </>
    );
  }
}
export default thirdPart;
