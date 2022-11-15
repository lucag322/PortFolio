import React, { useState, useEffect, useRef } from "react";
import "./../../css/thirdPart.css";
import Img1 from "./../../img/capture1.png";
import Img2 from "./../../img/capture2.png";
import Img3 from "./../../img/capture3.png";
import Img4 from "./../../img/capture4.png";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircle } from "@fortawesome/free-solid-svg-icons";


function thirdPart() {


  
  useEffect(() => {

    gsap.to(".changeStyle", {
     color: "white",


  
      scrollTrigger: {
        trigger: ".start2",
        start: "top center",
        end: "center",
        scrub: true,
        markers: false,
      },
    });
    gsap.to(".changeStyle", {
      color: "#1b3b6f",
      immediateRender: false,

 
   
       scrollTrigger: {
         trigger: ".start3 ",
         start: "bottom -85",
         end: "bottom ",
         scrub: true,
         markers: false,
       },
     });
    
  }, []);

  const ref: any = useRef();

  return (
  <>
    <div className="cache"></div>
    <div className="thirdPart " id="drag">
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
    </>
  );
}

export default thirdPart;
function getElementPosition(target_1: JQuery<HTMLElement>, arg1: boolean) {
  throw new Error("Function not implemented.");
}

