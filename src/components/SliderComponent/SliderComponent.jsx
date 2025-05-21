import React from 'react'
import Slider from "react-slick";
import { Image } from 'antd';


const SliderComponent = ({ arrImages }) => {
   var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      {arrImages.map((image) => {
        return (
          <Image src={image} alt="Slider Image" preview={false} width={"100%"} />
        )
      })}

    </Slider>
  )
}

export default SliderComponent