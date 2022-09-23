import React, { useState, useEffect, useRef } from "react";
import "./../../css/secondPart.css";
import { motion } from "framer-motion";
import Images from "./imgSlider";
import { Container, Row, Col } from "react-bootstrap";




function slider() {

  const [width, setWidth] = useState(0);
  const carrousel:any = useRef();

  useEffect(() => {
    if (carrousel.current) {
      setWidth(carrousel.current.scrollWidth - carrousel.current.offsetWidth);
    }

  }, []);
  return (
    <motion.div ref={carrousel} className="carrousel" whileTap={{cursor:"grabbing"}}>
      <motion.div drag="x" dragConstraints={{right:0, left: -width}} className="inner-carrousel">
       
            <motion.div className="item">
               <Col className="test box" lg={3} sm={3} xs={3}>
            <h3 className="boxTitle">Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet.Sed beatae quas sit fugit fugiat sit
              placeat doloribus ut eius atque est odio voluptates. Ut possimus
              veritatis eum libero deleniti ab illo optio Lorem ipsum dolor sit
              amet.Sed beatae quas sit fugit fugiat sit placeat doloribus ut
              eius atque est odio voluptates. Ut possimus veritatis eum libero
              deleniti ab illo optio
            </p>
          </Col>
            </motion.div>
            <motion.div className="item">
               <Col className="test box" lg={3} sm={3} xs={3}>
            <h3 className="boxTitle">Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet.Sed beatae quas sit fugit fugiat sit
              placeat doloribus ut eius atque est odio voluptates. Ut possimus
              veritatis eum libero deleniti ab illo optio Lorem ipsum dolor sit
              amet.Sed beatae quas sit fugit fugiat sit placeat doloribus ut
              eius atque est odio voluptates. Ut possimus veritatis eum libero
              deleniti ab illo optio
            </p>
          </Col>
            </motion.div>
            <motion.div className="item">
               <Col className="test box" lg={3} sm={3} xs={3}>
            <h3 className="boxTitle">Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet.Sed beatae quas sit fugit fugiat sit
              placeat doloribus ut eius atque est odio voluptates. Ut possimus
              veritatis eum libero deleniti ab illo optio Lorem ipsum dolor sit
              amet.Sed beatae quas sit fugit fugiat sit placeat doloribus ut
              eius atque est odio voluptates. Ut possimus veritatis eum libero
              deleniti ab illo optio
            </p>
          </Col>
            </motion.div>
            <motion.div className="item">
               <Col className="test box" lg={3} sm={3} xs={3}>
            <h3 className="boxTitle">Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet.Sed beatae quas sit fugit fugiat sit
              placeat doloribus ut eius atque est odio voluptates. Ut possimus
              veritatis eum libero deleniti ab illo optio Lorem ipsum dolor sit
              amet.Sed beatae quas sit fugit fugiat sit placeat doloribus ut
              eius atque est odio voluptates. Ut possimus veritatis eum libero
              deleniti ab illo optio
            </p>
          </Col>
            </motion.div>
         
      </motion.div>
    </motion.div>
    );
  }
  
  export default slider;
  