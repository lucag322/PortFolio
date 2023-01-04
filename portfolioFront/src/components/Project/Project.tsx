import React from 'react';
import { useEffect, useRef, useState } from "react";
import {Route, Link, Routes, useParams} from 'react-router-dom';
import'../../css/project.css';
import { Container, Col, Row } from "react-bootstrap";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAnimation, motion, Variants } from "framer-motion";
import Hours from "../home/firstPart/Hours";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function Project() {
  const navigate = useNavigate();


  const id = useParams();
 
  const [isLoading, setIsLoading] = useState(true);
  const [projet, setProjet] = useState<any>([null]);
  var config = {
  
    headers: {
      'Accept': 'application/json',
     }
  };

useEffect(() => {

  // Make a request for a user with a given ID
axios.get(`http://localhost:1337/api/projets/${id.id}?populate=*`, config)
.then((res) => { setProjet(Object.values(res.data.data
  )); 
  setIsLoading(false);
console.log(res.data);
})

.catch(function (error) {
  // handle error
  console.log(error);
});

}, [])





  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
    const [isOpen, setIsOpen] = useState(false);



  useEffect(() => {

gsap.registerPlugin(ScrollTrigger);    
// gsap.utils.toArray<HTMLElement>('.panel').forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: "top top", 
//     pin: true, 
//     markers: false,
//     end: () => "+=" + panel.offsetWidth/4
//   });
// });

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
              partname.classList.add("bluemodename");
              hiddebarmenu.classList.add("hidde");
              hiddebartime.classList.add("hidde");
               menu.classList.add("bluemodemenue");
              heure.classList.add("bluemodeheure");
            } else if (
              entry.isIntersecting &&
              entry.target.classList.contains("whiteswitch")
            ) {
              console.log("white");
              body.classList.remove("bluemode");
              partname.classList.remove("bluemodename");
              hiddebarmenu.classList.remove("hidde");
              hiddebartime.classList.remove("hidde");
              heure.classList.remove("bluemodeheure");
              menu.classList.remove("bluemodemenue");
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

    
    <div>
 
      <Hours />
      <div className="hiddebarmenu "></div>
      <div className="hiddebartime"></div>
      <span className="btnOpen" onClick={()=>navigate(`/`)}>
        <FontAwesomeIcon icon={faBars} />
      </span>
    
      <Container className='py-5 d-flex align-items-center firstProject panel switch blueswitch'>
      {isLoading ? 'loading' : projet.slice(1, 2).map((item: any) =>
        <Row className='test'> 
          <Col lg={12}>
            <Row>
              <Col>
                <h3 key={item.title}>{item.title}---</h3>
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
        )}
      </Container>
      <Container className='py-5 secondProject panel'>
        <Row className='switch blueswitch py-3'>
          <Col className='text-center'>
          {isLoading ? 'loading' : projet.slice(1, 2).map((item: any) =>{
            if(item.presentation.data.attributes.url !== null){
              return <video autoPlay loop muted id='video' className='ratio ratio-16x9'>
              <source key={item.presentation.data.attributes.url} src={`http://localhost:1337${item.presentation.data.attributes.url}`} type='video/mp4' />
            </video>
            } 
            return null;
          })}
          </Col>
        </Row>
        <Row className=' switch whiteswitch py-3' >
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} className='col text-center'>
          {isLoading ? 'loading' : projet.slice(1, 2).map((item: any) =>{
            if(item.sideImage.data.attributes.url !== null){
              return <motion.img key={item.sideImage.data.attributes.url} variants={rowVariants} src={`http://localhost:1337${item.sideImage.data.attributes.url}`} />
            } 
            return null;
          })}
          </motion.div>
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.4 }} className='col d-flex align-items-center'>
          {isLoading ? 'loading' : projet.slice(1, 2).map((item: any) =>{
            if(item.projectDescription !== null){
              return  <motion.p variants={rowVariants} className='descProject' key={item.projectDescription}>
                        {item.projectDescription}
                      </motion.p>
            } 
            return null;
          })}
            </motion.div>
        </Row>
        <Row className='py-5 switch whiteswitch'>
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.4 }}  className='col text-center'>
          {isLoading ? 'loading' : projet.slice(1, 2).map((item: any) =>{
            if(item.firstmobileimage.data.attributes.url !== null && typeof item.firstmobileimage.data.attributes.url !== 'undefined'){
              return ( <motion.img key={item.firstmobileimage.data.attributes.url} variants={cardVariants} src={`http://localhost:1337${item.firstmobileimage.data.attributes.url}`} className="telcapture"/> )
            } else{
            console.log('cest chaud');
            }
          })}
              </motion.div>
          <motion.div  initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.6 }} className='col text-center'>
          {isLoading ? 'loading' : projet.slice(1, 2).map((item: any) =>{
            if(item.secondmobileimage.data.attributes.url !== null){
              return <motion.img key={item.secondmobileimage.data.attributes.url} variants={cardVariants} src={`http://localhost:1337${item.secondmobileimage.data.attributes.url}`} className="telcapture"/>
            } 
            return null;
          })}
          </motion.div>
          <motion.div  initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} className='col text-center'>
          {isLoading ? 'loading' : projet.slice(1, 2).map((item: any) =>{
            if(item.thirdmobileimage.data.attributes.url !== null){
              return <motion.img key={item.thirdmobileimage.data.attributes.url} variants={cardVariants} src={`http://localhost:1337${item.thirdmobileimage.data.attributes.url}`} className="telcapture"/>
          } 
          return null;
        })}
            </motion.div>
        </Row>
   
       
      </Container>
    </div>
  );
}

export default Project;