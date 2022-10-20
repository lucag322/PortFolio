import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAnimation, motion } from "framer-motion";


import Css from "./../../img/css";
import Html5 from "./../../img/html5";
import ReactLOGO from "./../../img/React";
import Typescript from "./../../img/Typescript";
import Scss from "./../../img/sass";
import Svelte from "./../../img/Svelte";

function Grab() {

  const constraintsRef = useRef(null)


  return(
    <>
    <Container >
    <Row className="drag">
      <Col lg={12} sm={12} xs={12} >
        <h5 className="text-end">Grab, Read and Throw</h5>
        <motion.div className="containerDrag" ref={constraintsRef}>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="itemDrag typescipt" drag dragConstraints={constraintsRef} dragTransition={{ bounceStiffness: 20, bounceDamping: 10 }}>
              <Typescript />
              <div className="SkillsDesc">
                <h5>test</h5>
                <p>testtestestestestestestestest</p>
              </div>
            </motion.div>
        
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="itemDrag svelte" drag dragConstraints={constraintsRef} dragTransition={{ bounceStiffness: 20, bounceDamping: 10 }}> 
             <Svelte />
             <div className="SkillsDesc">
                <h5>test</h5>
                <p>testtestestestestestestestest</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="itemDrag css"drag dragConstraints={constraintsRef} dragTransition={{ bounceStiffness: 20, bounceDamping: 10 }}>
              <Css />

              <div className="SkillsDesc">
                <h5>test</h5>
                <p>testtestestestestestestestest</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="itemDrag html5" drag dragConstraints={constraintsRef} dragTransition={{ bounceStiffness: 20, bounceDamping: 10 }}>
              <Html5 />
              <div className="SkillsDesc">
                <h5>test</h5>
                <p>testtestestestestestestestest</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="itemDrag react" drag dragConstraints={constraintsRef} dragTransition={{ bounceStiffness: 20, bounceDamping: 10 }}>
              <ReactLOGO /> 
              <div className="SkillsDesc">
                <h5>test</h5>
                <p>testtestestestestestestestest</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="itemDrag scss" drag dragConstraints={constraintsRef} dragTransition={{ bounceStiffness: 20, bounceDamping: 10 }}>
              <Scss />
              <div className="SkillsDesc">
              <h5>test</h5>
              <p>testtestestestestestestestest</p>
              </div>
            </motion.div>
           
        </motion.div>
      </Col>
    </Row>
  </Container>
  </>
  )
}

export default Grab;