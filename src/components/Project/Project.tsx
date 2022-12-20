import React from 'react';
import { useEffect, useRef, useState } from "react";
import'../../css/project.css';
import { Container, Col, Row } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAnimation, motion,Variants  } from "framer-motion";
import backgroundVideo from '../../img/Thalamus74.mp4';
import thalagif from '../../img/thalagif.gif';
import capture1 from '../../img/thalamus74Iphone1.png';
import capture2 from '../../img/thalamus74Iphone2.png';
import capture3 from '../../img/thalamus74Iphone3.png';


function Project() {

  useEffect(() => {
gsap.registerPlugin(ScrollTrigger);    
gsap.utils.toArray<HTMLElement>('.panel').forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top", 
    pin: true, 
    markers: false,
    end: () => "+=" + panel.offsetWidth/4
  });
});

    function blue() {
       const body: any = document.querySelector("body");
      const menu: any = document.querySelector(".btnOpen");
      const partname: any = document.querySelector("#Titre");
      const hiddebarmenu: any = document.querySelector(".hiddebarmenu");
      const hiddebartime: any = document.querySelector(".hiddebartime");
      const heure: any = document.querySelector(".heure");
      
      let observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              entry.isIntersecting &&
              entry.target.classList.contains("blueswitch")
            ) {
              console.log("blue");
              body.classList.add("bluemode");
              menu.classList.add("bluemodemenue");
              partname.classList.add("bluemodename");
              hiddebarmenu.classList.add("hidde");
              hiddebartime.classList.add("hidde");
              heure.classList.add("bluemodeheure");
            } else if (
              entry.isIntersecting &&
              entry.target.classList.contains("whiteswitch")
            ) {
              console.log("white");
              body.classList.remove("bluemode");
              menu.classList.remove("bluemodemenue");
              partname.classList.remove("bluemodename");
              hiddebarmenu.classList.remove("hidde");
              hiddebartime.classList.remove("hidde");
              heure.classList.remove("bluemodeheure");
              
            }
          });
        },
        {
          rootMargin: "-47% 0px -47% 0px",
        }
      );

      let target = ".switch";
      document.querySelectorAll(target).forEach((i) => {
        if (i) {
          observer.observe(i);
        }
      });
    }

    blue();
  }, []);

 const cardVariants: Variants = {
    offscreen: {
      y: 600
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
 };
  
  const rowVariants: Variants = {
    offscreen: {
      x: -1600
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  
  return (
    <>

      <Container className='py-5 d-flex align-items-center firstProject panel switch blueswitch'>
        <Row>
          <Col lg={12}>
            <Row>
              <Col>
                <h3>Thalamus Haute Savoie ---</h3>
              </Col>
            </Row>
            <Row className='switch blueswitch'>
              <Col xs={3} className='d-grid text-center'>
                <span className='role'>Design by</span>
                <span className='roleName'> TRYTRYTRY</span>
              </Col>
              <Col xs={3} className='d-grid text-center'>
                <span className='role'>Design by</span>
                <span className='roleName'> TRYTRYTRY</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className='py-5 secondProject panel'>
        <Row className='switch blueswitch py-3'>
          <Col className='text-center'>
            <video autoPlay loop muted id='video' className='ratio ratio-16x9'>
              <source src={backgroundVideo} type='video/mp4' />
            </video>
          </Col>
        </Row>
        <Row className=' switch whiteswitch py-3' >
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} className='col text-center'>
            <motion.img variants={rowVariants} src={thalagif} />
          </motion.div>
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.4 }} className='col d-flex align-items-center'>
            <motion.p variants={rowVariants} className='descProject'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, ut
              aliquet nisl nisl sit amet nisl. Nulla facilisi. Nulla facilisi.
              Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, ut
              aliquet nisl nisl sit amet nisl. Nulla facilisi. Nulla facilisi.
              Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, ut
              aliquet nisl nisl sit amet nisl. Nulla facilisi. Nulla facilisi.
              Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
            </motion.p>
            </motion.div>
        </Row>
        <Row className='py-5 switch whiteswitch'>
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.4 }}  className='col text-center'>
            <motion.img variants={cardVariants} src={capture1} className="telcapture"/>
          </motion.div>
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.6 }} className='col text-center'>
            <motion.img variants={cardVariants} src={capture2} className="telcapture"/>
          </motion.div>
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} className='col text-center'>
            <motion.img variants={cardVariants} src={capture3} className="telcapture"/>
          </motion.div>
        </Row>
      </Container>
      
     
    </>
  );
}

export default Project;