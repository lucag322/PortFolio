import React, { useState, useEffect, useRef } from "react";
import "./../../css/thirdPart.css";
import Img1 from "./../../img/capture1.png";
import Img2 from "./../../img/capture2.png";
import Img3 from "./../../img/capture3.png";
import Img4 from "./../../img/capture4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircle } from "@fortawesome/free-solid-svg-icons";


function thirdPart() {
  const ref: any = useRef();

  return (
    <div className="thirdPart" id="drag">
      <div className="card yrsa first">
        <div className="img-box">
          <img src={Img1} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h3 className="card-title">Card title</h3>
          <a href="#" className="btn btn-primary">
            Voir plus{" "}
            <FontAwesomeIcon icon={faArrowRight} className="btn-arrow" />
          </a>
        </div>
      </div>
      <div className="card yrsa">
        <div className="img-box">
          <img src={Img2} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h3 className="card-title">Card title</h3>
          <a href="#" className="btn btn-primary">
            Voir plus{" "}
            <FontAwesomeIcon icon={faArrowRight} className="btn-arrow" />
          </a>
        </div>
      </div>
      <div className="card yrsa">
        <div className="img-box">
          <img src={Img3} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h3 className="card-title">Card title</h3>
          <a href="#" className="btn btn-primary">
            Voir plus{" "}
            <FontAwesomeIcon icon={faArrowRight} className="btn-arrow" />
          </a>
        </div>
      </div>
      <div className="card yrsa">
        <div className="img-box">
          <img src={Img4} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h3 className="card-title">Card title</h3>
          <a href="#" className="btn btn-primary">
            Voir plus{" "}
            <FontAwesomeIcon icon={faArrowRight} className="btn-arrow" />
          </a>
        </div>
      </div>
      <div className="card yrsa">
        <div className="img-box">
          <img src={Img2} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h3 className="card-title">Card title</h3>
          <a href="#" className="btn btn-primary">
            Voir plus{" "}
            <FontAwesomeIcon icon={faArrowRight} className="btn-arrow" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default thirdPart;
