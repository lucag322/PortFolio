import React, { useState } from "react";
import { motion } from "framer-motion";

const MouseTracker: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX: x, clientY: y } = e;
    setPosition({ x, y });
  };

  return (
    <div
      style={{ width: "100vw", height: "100vh", position: "relative" }}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "white",
          borderRadius: "50%",
          position: "absolute",
          left: position.x - 5, // Position en fonction de la souris
          top: position.y - 5, // Position en fonction de la souris
        }}
      />
    </div>
  );
};

export default MouseTracker;
