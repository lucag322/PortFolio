import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FakeLoader: React.FC<{ fullLoaded: boolean; setFakeLoaderEnd: any }> = ({
  fullLoaded,
  setFakeLoaderEnd,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 100 && !fullLoaded) {
        setCount((prevCount) => prevCount + 1);
      } else {
        setCount((prevCount) => {
          const randomIncrement = Math.floor(Math.random() * 10);
          return prevCount + randomIncrement <= 100
            ? prevCount + randomIncrement
            : 100;
        });
      }
      if (count >= 100) {
        setFakeLoaderEnd(true);
        clearInterval(interval); // Arrête l'intervalle lorsque le compteur atteint 100
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const formatCount = (count: number) => {
    if (count < 10) {
      return `00${count}`;
    } else if (count < 100) {
      return `0${count}`;
    } else {
      return `${count}`;
    }
  };

  return (
    <div className="loader-container">
      <h3 className="fakeLoaderNumber">{formatCount(count)}</h3>
    </div>
  );
};

export default FakeLoader;
