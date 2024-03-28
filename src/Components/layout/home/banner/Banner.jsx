import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Img from "../../../reUseAble/Img";

function Banner() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    appendDots: (dots) => (
      //container
      <div
        style={{
          width: "fit-content",
          padding: "0px",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "15px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          fontSize: "13px",
          color: "#000",
          fontWeight: "bold",
          borderRight: "2px solid #000",
          cursor: "pointer",
          padding: "0 5px",
        }}
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 480,
        settings: {
          customPaging: (i) => (
            <div
              style={{
                fontSize: "10px",
                color: "#000",
                fontWeight: "bold",
                borderRight: "2px solid #000",
                cursor: "pointer",
                padding: "0 5px",
              }}
            >
              0{i + 1}
            </div>
          ),
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      <div>
        <Img src={"img/banner.png"} alt={"banner"} className={"bg-no-repeat"} />
      </div>
      <div>
        <Img src={"img/banner.png"} alt={"banner"} className={"bg-no-repeat"} />
      </div>
      <div>
        <Img src={"img/banner.png"} alt={"banner"} className={"bg-no-repeat"} />
      </div>
    </Slider>
  );
}

export default Banner;
