import React, { useState, useEffect, useRef } from "react";
import "./../../css/firstpart.css";
import Img1 from "./../../img/thalamus74.png";
import Img2 from "./../../img/capture2.png";
import Img3 from "./../../img/capture3.png";
import Img4 from "./../../img/capture4.png";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircle } from "@fortawesome/free-solid-svg-icons";

function thirdPart() {
  return (
    <>
      <section>
        <div className="thirdPart " id="drag">
          <div className="projectcontainer first panel">
            <div className="projet yrsa  position-relative">
              <div className="img-box position-absolute">
                <img src={Img1} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h3 className="card-title yrsa">Card title</h3>
              </div>
            </div>
          </div>

          <div className="projectcontainer panel">
            <div className="projet yrsa  position-relative">
              <div className="img-box position-absolute">
                <img src={Img1} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h3 className="card-title">Card title</h3>
              </div>
            </div>
          </div>
          <div className="projectcontainer panel">
            <div className="projet yrsa position-relative">
              <div className="img-box position-absolute">
                <img src={Img1} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h3 className="card-title">Card title</h3>
              </div>
            </div>
          </div>
          <div className="projectcontainer panel">
            <div className="projet yrsa position-relative">
              <div className="img-box position-absolute">
                <img src={Img1} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h3 className="card-title">Card title</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default thirdPart;
