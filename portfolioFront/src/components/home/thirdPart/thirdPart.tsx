import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "../../../css/thirdPart.css";
import gsap from "gsap";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAnimation, motion, Variants } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

function thirdPart() {
  const [opacity, setOpacity] = useState(0);
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
      .get("http://localhost:1337/api/projets?populate=*", config)
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


projet.map((item: any) => {
  console.log("item :", item.ImgHomePage);
});

   

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
          // snap: {
          //   snapTo: 1 / (totalPanels - 1),
          //   duration: { min: 0.1, max: 0.3 },
          //   delay: 0.001,
          //   ease: "power3.inOut",
          // },
          markers: true,
          end: () => "+=" + container.current.offsetWidth ,
        },
      });
    }, comp,);

    return () => ctx.revert(); // cleanup
  }, [isLoading && []]);


  return (
    <>
      <BrowserView>
        <div className="thirdPart " id="thirdPart" ref={container}>
          {isLoading
            ? "loading"
            : projet.map((item: any, i: any) => {
              let positions: Array<any> = []; // Tableau pour stocker les positions occupées par les images

              const getRandomPosition = () => {
                // Fonction pour générer une position aléatoire non occupée
                let randomX = Math.random() * (700 + 700) - 700;
                let randomY = Math.random() * (250 + 250) - 250;
        
                while (positions.some((pos) => pos.x === randomX && pos.y === randomY)) {
                  // Tant que la position aléatoire générée est déjà occupée, on en génère une nouvelle
                  randomX = Math.random() * (700 + 700) - 700;
                  randomY = Math.random() * (250 + 2500) - 250;
                }
        
                positions.push({ x: randomX, y: randomY }); // On ajoute la position générée dans le tableau
                return { x: randomX, y: randomY };
              };

              const url1 = `https://back.lucagrousset.eu${item.attributes.miniature.data.attributes.url}`;
              const url2 = `https://back.lucagrousset.eu${item.attributes.leftimage.data.attributes.url}`;
              const url3 = `https://back.lucagrousset.eu${item.attributes.rightimage.data.attributes.url}`;
              return (
              <>
                <div className="projectcontainer panel"ref={(e) => createPanelsRefs(e, i)} key={item.id}id={i}>
                    <div className="projet yrsa  position-relative d-flex align-items-center justify-content-center">
                    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
                      <div className="title-box " data-speed="1" onClick={() => navigate(`project/${item.id}`)}>
                        <MouseParallaxChild factorX={0.3} factorY={0.5} >
                          <h3 className="card-title yrsa noSelect" key={item.attributes.title}>
                            {item.attributes.title}
                          </h3>
                        </MouseParallaxChild>
                      </div>
                      </MouseParallaxContainer>

                      {}
                      <motion.div
                        style={{backgroundSize: 'contain',backgroundRepeat: 'no-repeat',position: 'absolute',borderRadius: 5,cursor: "grab",
                        ...getRandomPosition(), }} drag dragConstraints={{top: -300,right: 700,bottom: 300,left: -700,}} dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }} dragElastic={0.5}
                        whileTap={{ cursor: "grabbing" }}>
                        <img src={url1} className="noselect" style={{maxWidth:'20rem'}}/>
                        <div style={{width:'100%', height:'100%',position:'absolute',top:'0'}}></div>
                      </motion.div>
                      <motion.div
                          style={{backgroundSize: 'contain',backgroundRepeat: 'no-repeat',position: 'absolute',borderRadius: 5,cursor: "grab",
                          ...getRandomPosition(), }} drag dragConstraints={{top: -300,right: 700,bottom: 300,left: -700,}} dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }} dragElastic={0.5}
                          whileTap={{ cursor: "grabbing" }}>
                        <img src={url2} className="noselect" style={{maxWidth:'20rem'}}/>
                        <div style={{width:'100%', height:'100%',position:'absolute',top:'0'}}></div>
                      </motion.div>
                      <motion.div
                        style={{backgroundSize: 'contain',backgroundRepeat: 'no-repeat',position: 'absolute',borderRadius: 5,cursor: "grab",
                        ...getRandomPosition(), }} drag dragConstraints={{top: -300,right: 700,bottom: 300,left: -700,}} dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }} dragElastic={0.5}
                        whileTap={{ cursor: "grabbing" }}>
                        <img src={url3} className="noselect" style={{maxWidth:'20rem'}}/>
                        <div style={{width:'100%', height:'100%',position:'absolute',top:'0'}}></div>
                      </motion.div>
                    
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
  src={`https://back.lucagrousset.eu.eu${item.attributes.miniature.data.attributes.url}`}
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