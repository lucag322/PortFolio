import React, { useState, useEffect, useRef } from "react";
import "../../../css/thirdPart.css";
import Img1 from "../../../img/thalamus742.png"; 
import Img2 from "./../../img/capture2.png";
import Img3 from "./../../img/capture3.png";
import Img4 from "./../../img/capture4.png";
import gsap  from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import { useAnimation, motion, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function thirdPart() {


  const [isLoading, setIsLoading] = useState(true);
  const [projet, setProjet] = useState<any>([null]);
  var config = {
  
    headers: {
      'Accept': 'application/json',
     }
  };

useEffect(() => {
  // Make a request for a user with a given ID
axios.get('http://localhost:1337/api/projets?populate=*', config)
.then((res) => { setProjet(Object.values(res.data.data)); 
  setIsLoading(false);
console.log('projet :', res.data.data);
})

.catch(function (error) {
  // handle error
  console.log(error);
});
}, [])






 const navigate = useNavigate();
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
  
//   useEffect(() => {
//     const compo = document.querySelectorAll(".projectcontainer");
//   const contai: HTMLElement | null = document.querySelector(".thirdPart");
// if(contai !== null){
//   gsap.to(compo, {
//     xPercent: -100 * (compo.length - 1),
//     ease: "none",
//     scrollTrigger: {
//       trigger: contai,
//       pin: contai,
//       markers: true ,
//       scrub: 1,
//       snap:{
//         snapTo: 1 / (compo.length - 1),
//         delay: 0.1,
//       },
//       end: () => "+=" + contai.offsetWidth,
//     },
//   });
// }
// }, []);
  return (
    <>
  
         <div className="thirdPart " id="drag">


         {isLoading ? 'loading' : projet.map((item: any) =>

          <div className="projectcontainer first panel" key={item.id} onClick={()=>navigate(`project/${item.id}`)}>
            <div className="projet yrsa  position-relative" >
              <motion.div  initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} className="img-box position-absolute">
                <motion.img key={item.attributes.miniature.data.attributes.url} variants={cardVariants} src={`http://localhost:1337${item.attributes.miniature.data.attributes.url}`} className="card-img-top" alt="..." />
              </motion.div>
              <div className="card-body">
                <h3 className="card-title yrsa" key={item.attributes.title}>{item.attributes.title}</h3>
              </div>
            </div>
          </div>

          )}
        </div>

    </>
  );
}

export default thirdPart;
