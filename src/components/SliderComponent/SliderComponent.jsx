import React from 'react'
import { Image } from 'antd';
import { WrapperSliderStyle } from './style';


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
    <WrapperSliderStyle {...settings}>
      {arrImages.map((image) => {
        return (
          <Image src={image} alt="WrapperSliderStyle Image" preview={false} width={"100%"} />
        )
      })}

    </WrapperSliderStyle>
  )
}

export default SliderComponent