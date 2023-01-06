import React, { useEffect } from "react";
import { fadeInRight, easing } from "./varian";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MainVisual = () => {
  const [ref, inView] = useInView({
    triggerOnce: true
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      console.log("inView");
    } else {
      controls.start("hidden");
      console.log("outView");
    }
  }, [controls, inView]);

  return (
    <div className="mainvisual" ref={ref}>
      <motion.div
        className="mainvisual__content"
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              delayChildren: 0.5,
              staggerChildren: 0.5,
              easing
            }
          }
        }}
      >
        <motion.p className="mainvisual__catch" variants={fadeInRight}>
          サンプル企業理念
        </motion.p>
        <motion.p className="mainvisual__description" variants={fadeInRight}>
          テキストテキストテキストテキストテキスト
        </motion.p>
      </motion.div>
    </div>
  );
};

export default MainVisual;
