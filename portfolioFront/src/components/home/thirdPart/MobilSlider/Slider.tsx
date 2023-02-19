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
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    centerMode: true,
    centerPadding: "10%",
  };

  if (isLoading === false) {
    return (
      <>
      <div className="pt-5 pb-5">
        {
          <Slider {...settings}>
            {isLoading
              ? "loading"
              : projet.map((item: any) => (
                  <div>
                    <img
                        key={item.attributes.miniature.data.attributes.url}
                        src={`https://back.lucagrousset.eu${item.attributes.miniature.data.attributes.url}`}
                        className="card-img-top p-2"
                        alt="..."
                      />
                    {item.attributes.title}
                  </div>
                ))}
          </Slider>
        }
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
export default Slider1;
