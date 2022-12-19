import React, { useState, useEffect, useRef } from "react";
import "./../../css/thirdPart.css";
import Img1 from "./../../img/thalamus742.png";
import Img2 from "./../../img/capture2.png";
import Img3 from "./../../img/capture3.png";
import Img4 from "./../../img/capture4.png";
import gsap  from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import { useAnimation, motion,Variants  } from "framer-motion";

function thirdPart() {
    
   
 gsap.registerPlugin(ScrollTrigger);

 const cardVariants: Variants = {
  offscreen: {
    y: 600
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  }
};
  
  useEffect(() => {
    const compo = document.querySelectorAll(".projectcontainer");
  const contai: HTMLElement | null = document.querySelector(".thirdPart");
if(contai !== null){
  gsap.to(compo, {
    xPercent: -100 * (compo.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: contai,
      pin: contai,
      markers: false ,
      scrub: 1,
      snap:{
        snapTo: 1 / (compo.length - 1),

      },
      end: () => "+=" + contai.offsetWidth,
    },
  });
}
}, []);
  return (
    <>
  
         <div className="thirdPart " id="drag">
          <div className="projectcontainer first panel">
            <div className="projet yrsa  position-relative">
              <motion.div  initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} className="img-box position-absolute">
                <motion.img variants={cardVariants} src={Img1} className="card-img-top" alt="..." />
              </motion.div>
              <div className="card-body">
                <h3 className="card-title yrsa">Card title</h3>
              </div>
            </div>
          </div>

          <div className="projectcontainer panel">
            <div className="projet yrsa  position-relative">
            <motion.div  initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} className="img-box position-absolute">
                <motion.img variants={cardVariants} src={Img1} className="card-img-top" alt="..." />
              </motion.div>
              <div className="card-body">
                <h3 className="card-title">Card title</h3>
              </div>
            </div>
          </div>
          <div className="projectcontainer panel">
            <div className="projet yrsa position-relative">
            <motion.div  initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} className="img-box position-absolute">
                <motion.img variants={cardVariants} src={Img1} className="card-img-top" alt="..." />
              </motion.div>
              <div className="card-body">
                <h3 className="card-title">Card title</h3>
              </div>
            </div>
          </div>
          <div className="projectcontainer panel">
            <div className="projet yrsa position-relative">
            <motion.div  initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} className="img-box position-absolute">
                <motion.img variants={cardVariants} src={Img1} className="card-img-top" alt="..." />
              </motion.div>
              <div className="card-body">
                <h3 className="card-title">Card title</h3>
              </div>
            </div>
          </div>
        </div>

    </>
  );
}

export default thirdPart;
