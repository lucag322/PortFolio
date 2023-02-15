import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  Component,
} from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./slider.css";
// import { useAnimation, motion, Variants } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import Slider from "react-slick";
import "../../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import axios from "axios";

function Slider1() {
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

  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          centerMode: true,
          centerPadding: "10%",
        },
      },
    ],
  };

  if (isLoading === false) {
    return (
      <>
        {
          <Slider {...settings}>
            {isLoading
              ? "loading"
              : projet.map((item: any) => (
                  <div className="card">{item.attributes.title}</div>
                ))}
          </Slider>
        }{" "}
      </>
    );
  } else {
    return <></>;
  }
}
export default Slider1;
