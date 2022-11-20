import "./App.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, animateScroll, Element as scroll, scrollSpy, scroller } from 'react-scroll'

import FirstPart from "./components/firstPart/firstPart";
import SecondPart from "./components/secondPart/secondPart";
import ThirdPart from "./components/thirdPart/thirdPart";
import FourthPart from "./components/fourthPart/fourthPart";
import FifthPart from "./components/fifthPart/fifthPart";
import Hours from "./components/firstPart/Hours";
import Menu from "./components/firstPart/menu";
import Test from "./components/test/test";
import "./css/firstPart.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";

gsap.registerPlugin(ScrollTrigger);


function App() {



  const [isOpen, setIsOpen] = useState(false);


  const panels: any = useRef([]);
  const panelsContainer: any = useRef([]);

  const createPanelsRefs = (panel: HTMLDivElement | null, index: number) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    const totalPanels = panels.current.length;

    gsap.to(panels.current, {
      xPercent: -250 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        markers: false,
        pin: true,
        scrub: 1,

        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + panelsContainer.current.offsetWidth,
      },
    });


 function blue() {
    const body:any = document.querySelector('body');
    const menu:any = document.querySelector('.btnOpen');
    const partname:any = document.querySelector('#Titre');
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && entry.target.classList.contains('blueswitch')) {
                console.log('blue');
                body.classList.add('bluemode');
                menu.classList.add('bluemodemenue');
                partname.classList.add('bluemodename');
                }
                else if (entry.isIntersecting && entry.target.classList.contains('whiteswitch')) {
                console.log('white')
                body.classList.remove('bluemode');
                menu.classList.remove('bluemodemenue');   
                partname.classList.remove('bluemodename');
                }
            });

        }, {
            rootMargin: '-47% 0px -47% 0px'
    });
    
    
    let target = '.swictch';
    document.querySelectorAll(target).forEach((i) => {

    if (i) {
        observer.observe(i);
        }
    })
};
 
blue();

  }, []);

 

  return (
    <div className="App">
      
      <Hours />
      <span className="btnOpen" onClick={() => setIsOpen(true)}>
      <FontAwesomeIcon icon={ faBars } />
      </span>
      <Menu  isOpen={isOpen} onChange={setIsOpen}></Menu>
      <Row name="top" className="swictch whiteswitch">
        <FirstPart/>
      </Row>
      <Row name="skills" className="swictch whiteswitch">
        <SecondPart/>
      </Row>
      <div className="borderWhite"></div>
      <Row name="project" className="swictch blueswitch">
        <div ref={panelsContainer}>
          <div className="panel" ref={(e) => createPanelsRefs(e, 1)}>
              <ThirdPart/>
          </div>
        </div>
      </Row>
      
      <Row name="about" className="swictch whiteswitch">
        <FourthPart/>
      </Row>
      <Row name="contacte swictch whiteswitch">
        <FifthPart />
      </Row>
      <div>
        <Row className="footer">
          <Col lg={6} sm={6} xs={6} className="footerLeft text-left">
            <span className="px-5">2023</span>
          </Col>
          <Col lg={6} sm={6} xs={6} className="fotterRight text-end">
            <span className="px-5">Grousset Luca</span>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
