import React from 'react';
import { useEffect, useRef, useState } from "react";
import'../../css/project.css';
import { Container, Col, Row } from "react-bootstrap";
import { useAnimation, motion,Variants  } from "framer-motion";
import backgroundVideo from '../../img/Thalamus74.mp4';
import thalagif from '../../img/thalagif.gif';
import capture1 from '../../img/thalamus74Iphone1.png';
import capture2 from '../../img/thalamus74Iphone2.png';
import capture3 from '../../img/thalamus74Iphone3.png';

function Project() {

  // useEffect(() => {
  //   function blue() {
      
  //     let observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           if (
  //             entry.isIntersecting &&
  //             entry.target.classList.contains("blueswitch")
  //           ) {
  //             console.log("blue");
  //           } else if (
  //             entry.isIntersecting &&
  //             entry.target.classList.contains("whiteswitch")
  //           ) {
  //             console.log("white");
              
  //           }
  //         });
  //       },
  //       {
  //         rootMargin: "-47% 0px -47% 0px",
  //       }
  //     );

  //     let target = ".swictch";
  //     document.querySelectorAll(target).forEach((i) => {
  //       if (i) {
  //         observer.observe(i);
  //       }
  //     });
  //   }

  //   blue();
  // }, []);

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
  
  return (
    <>
      <Container className='py-5'>
        <Row className='swictch blueswitch'>
          <Col>
           <h3>Thalamus 74</h3>
          </Col>
        </Row>
        <Row className='swictch blueswitch'>
          <Col>
            <span>Design by</span>
            <span> TRYTRYTRY</span>
          </Col>
        </Row>
        <Row className='swictch blueswitch'>
          <Col className='text-center'>
            <video autoPlay loop muted id='video' className='ratio ratio-16x9'>
              <source src={backgroundVideo} type='video/mp4' />
            </video>
          </Col>
        </Row>
        <Row className='switch whiteswitch'>
          <Col className='text-center'>
            <img src={thalagif} />
          </Col>
          <Col className='d-flex align-items-center'>
            <p className='descProject'>
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
            </p>
            </Col>
        </Row>
        <Row>
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