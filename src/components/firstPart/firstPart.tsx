import react, { useEffect, useRef } from "react";
import "./../../css/firstPart.css";
import { Container, Row, Col } from "react-bootstrap";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';






import Hours from "./Hours";

function FirstPart() {

  const changContentContact = () =>{
   document.querySelector("#Contact")!.innerHTML ='Contact';
    };
  
  const resetContentContact = () =>{
   document.querySelector("#Contact")!.innerHTML = ' <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="svg-inline--fa fa-circle dote" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"></path></svg> ';
  }

  const changContentAbout = () =>{
    document.querySelector("#About")!.innerHTML ='About';
     };
   
   const resetContentAbout = () =>{
    document.querySelector("#About")!.innerHTML = ' <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="svg-inline--fa fa-circle dote" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"></path></svg> ';
   }

   const changContentProject = () =>{
    document.querySelector("#Project")!.innerHTML ='Project';
     };
   
   const resetContentProject = () =>{
    document.querySelector("#Project")!.innerHTML = ' <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="svg-inline--fa fa-circle dote" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"></path></svg> ';
   }

   const changContentTop = () =>{
    document.querySelector("#Top")!.innerHTML ='Top';
     };
   
   const resetContentTop = () =>{
    document.querySelector("#Top")!.innerHTML = ' <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="svg-inline--fa fa-circle dote" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"></path></svg> ';
   }


  const scrollToTop = () => {
    window.scrollTo({
      top: 1000,
      behavior: 'smooth'
    });
  };

  return (
    <div className="firstPart">
        <Container>
          <Row className="firstRow">
            <Col>
              <div className="namePart noSelect">
                <h2 className=" m-0 fw-light fst-italic">Luca</h2>
                <h2 className=" m-0 text-end fw-light fst-italic">Grousset</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="arrow bounce noSelect"></div>
            </Col>
          </Row>
        </Container>
        <nav className="noSelect navbarCustom">
          <ul className="navbarContent thrn fw-bold ">
          <li className="py-2"><div className="bigTiret"/></li>
          
            <li onMouseOut={resetContentContact} onMouseOver={changContentContact} onClick={scrollToTop} id="Contact" className="Navitemrota">
              <FontAwesomeIcon icon={ faCircle } className="dote"/>
            </li>
            <li className="py-2"><div className="tiret"/></li>
            <li onMouseOut={resetContentAbout} onMouseOver={changContentAbout} id="About" className="Navitemrota">
              <FontAwesomeIcon icon={ faCircle }className="dote" /> </li>
            <li className="py-2"><div className="tiret"/></li>
            <li onMouseOut={resetContentProject} onMouseOver={changContentProject} id="Project" className="Navitemrota">
              <FontAwesomeIcon icon={ faCircle }className="dote" /> </li>
            <li className="py-2"><div className="tiret"/></li>
            <li onMouseOut={resetContentTop} onMouseOver={changContentTop} id="Top" className="Navitemrota">
              <FontAwesomeIcon icon={ faCircle }className="dote" /> </li>
          <li className="py-2"><div className="bigTiret"/></li>
          </ul>
        </nav>
        <span>
          <Hours/>
        </span>
      </div>
  );
}

export default FirstPart;
