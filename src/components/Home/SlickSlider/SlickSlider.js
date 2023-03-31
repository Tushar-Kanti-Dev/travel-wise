import React, { useRef } from "react";
import Slider from "react-slick";
import useHotel from "../../hooks/useHotel";
import SlickCard from "../SlickCard/SlickCard";

import './SlickSlider.css'

const SlickSlider = () => {
    const [photos, setPhotos] = useHotel();
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div>
      <Slider {...settings}>
        {
            photos.map(photo => <SlickCard
                key={photo.id}
                photo = {photo}
            ></SlickCard>)
        }
      </Slider>
    </div>
  );
};

export default SlickSlider;
