import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Menu from "../home/firstPart/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./../../css/allProject.css";

function allProject() {
  const location = useLocation();

  if (location.pathname === "/allProject") {
    document.body.classList.add("bluemode");
  }

  const [isOpen, setIsOpen] = useState(false);

  function noscroll() {
    var Html = document.querySelector(".html");
    if (Html != null) {
      Html.classList.add("noscroll");
    }
    setIsOpen(true);
  }

  const [HoverItem, setHoverItem] = useState<any>([null]);
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
      .get("https://back.lucagrousset.eu/api/projets?populate=*", config)
      .then((res) => {
        setProjet(Object.values(res.data.data));
        setHoverItem(res.data.data[0].attributes.miniature.data.attributes.url);
        setIsLoading(false);
      })

      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div className="fullpage-allproject">
        <div className="container-fluid">
          <Row>
            <Col md={6} lg={4} className="ps-0 liste-box">
              <ul className="Project-liste ps-0">
                {isLoading
                  ? "loading"
                  : projet.map((item: any, i: any) => (
                      <li
                        key={i}
                        className="Project-liste-item "
                        onClick={() => navigate(`../project/${item.id}`)}
                        onMouseEnter={() =>
                          setHoverItem(
                            item.attributes.miniature.data.attributes.url
                          )
                        }
                      >
                        <span className="px-3">{item.attributes.title}</span>
                      </li>
                    ))}
              </ul>
            </Col>
            <Col className="d-none d-md-block  my-3">
              <Row>
                <Col>
                  <div className="allproject-tool-bar">
                    <Container className="allproject-navbarr">
                      <Row>
                        <Col className="d-flex justify-content-end">
                          <span className="btnOpen" onClick={noscroll}>
                            <FontAwesomeIcon icon={faBars} />
                          </span>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <Menu isOpen={isOpen} onChange={setIsOpen}></Menu>
                  <h3 className="text-center">Test Title</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="Project-image">
                    <motion.img
                      src={`https://back.lucagrousset.eu${HoverItem}`}
                      alt="image"
                      className="Project-image-item"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
export default allProject;
