import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "../../../css/thirdPart.css";
import gsap from "gsap";
import Slider1 from "./MobilSlider/Slider";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import { useAnimation, motion, Variants } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

function thirdPart() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  gsap.registerPlugin(ScrollTrigger);
  const [isLoading, setIsLoading] = useState(true);
  const [projet, setProjet] = useState<any>([null]);
  var config = {
    headers: {
      Accept: "application/json",
    },
  };

  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get("https://back.lucagrousset.eu/api/projets?populate=*", config)
      .then((res) => {
        setProjet(Object.values(res.data.data));
        setIsLoading(false);
        console.log("projet :", res.data.data);
      })

      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();

  const cardVariants: Variants = {
    offscreen: {
     
    },
    onscreen: {

      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

if(isBrowser){
  const container: any = useRef(null);
  const panels: any = useRef([]);
  const comp = useRef();

  const createPanelsRefs = (panel: any, index: string | number) => {
    panels.current[index] = panel;
  };
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const totalPanels = panels.current.length;

      gsap.to(panels.current, {
        xPercent: -100 * (totalPanels - 1),
        ease: "linear",
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          scrub: 1,
          snap: {
            snapTo: 1 / (totalPanels - 1),
            duration: { min: 0.1, max: 0.3 },
            delay: 0.001,
            ease: "power3.inOut",
          },
          markers: false,
          end: () => "+=" + container.current.offsetWidth ,
        },
      });
    }, comp);
    return () => ctx.revert(); // cleanup
  }, [isLoading && []]);


  return (
    <>
      <BrowserView>
        <div className="thirdPart " id="thirdPart" ref={container}>
          {isLoading
            ? "loading"
            : projet.map((item: any, i: any) => {
              const url = `https://back.lucagrousset.eu${item.attributes.miniature.data.attributes.url}`;
              return (
              <>
                <div
                  className="projectcontainer panel"
                  ref={(e) => createPanelsRefs(e, i)}
                  key={item.id}
                  id={i}
                >
                  <div className="projet yrsa  position-relative d-flex align-items-center justify-content-center">
                    <div className="title-box" onClick={() => navigate(`project/${item.id}`)}>
                      <h3 className="card-title yrsa noSelect" key={item.attributes.title}>
                        {item.attributes.title}
                      </h3>
                    </div>
                    <motion.div
                style={{
                    width: '30rem',
                    backgroundSize: 'cover',
                    position: 'absolute',
                    borderRadius: 30,
                    backgroundImage: `url(${url})`,
                    cursor: "grab",
                }}
                className="ratio ratio-16x9"
                drag dragConstraints={{top: -300,right: 300,bottom: 300,left: -300,}}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                whileTap={{ cursor: "grabbing" }}
            > </motion.div>
                  </div>
                </div>
                </>
              );
            })}
        </div>
      </BrowserView>
      </>
    )
}else{
  return (
    <>
      <MobileView>
      <div className="thirdPartMobile">
        <h2 className="mobil-projet-titlebox">Projets</h2>
          {isLoading
            ? "loading"
            : projet.slice(-3).map((item: any, i: any) => (
              <div className="mobile-project" onClick={() => navigate(`project/${item.id}`)}>
                 <h3 className="mobile-projet-title yrsa" key={item.attributes.title}>
                        {item.attributes.title}
                  </h3>
              </div>
            ))}
        
      </div>
      </MobileView>
    </>
  );
}
}
export default thirdPart;




{/* <motion.div
initial="offscreen"
whileInView="onscreen"
viewport={{ amount: 1 }}
className="img-box position-absolute"
>
<motion.img
  key={item.attributes.miniature.data.attributes.url}
  variants={cardVariants}
  src={`https://back.lucagrousset.eu${item.attributes.miniature.data.attributes.url}`}
  className="card-img-top"
  alt="..."
/>
</motion.div>
<div className="card-body">
<h3
  className="card-title yrsa"
  key={item.attributes.title}
>
  {item.attributes.title}
</h3>
</div> */}