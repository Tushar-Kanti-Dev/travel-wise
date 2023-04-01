import React, { useRef, useState } from "react";
import Slider from "react-slick";
import useHotel from "../../hooks/useHotel";
import SlickCard from "../SlickCard/SlickCard";

import { BsArrowRightCircle, BsArrowLeftCircle} from "react-icons/bs";

import './SlickSlider.css'

const SlickSlider = () => {
    const [photos, setPhotos] = useHotel();


    // const [sliderRef, setSliderRef] = useState(null);
    const slider = useRef(null);
    
  const settings = {
    centerMode: true,
    centerPadding: '60px',
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,

        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <div>
      
      <Slider ref={slider} {...settings}>
        {
            photos.map(photo => <SlickCard
                key={photo.id}
                photo = {photo}
            ></SlickCard>)
        }
      </Slider>
      <div className='controls'>
        <button onClick={()=> slider.current.slickPrev()}>
          <BsArrowLeftCircle />
        </button>
        <button onClick={()=> slider.current.slickNext()}>
          <BsArrowRightCircle />
        </button>
      </div>
      {/* <div className="slider-button">
        <button onClick={()=> slider.current.slickPrev()}>Prev</button>
        <button onClick={()=> slider.current.slickNext()}>Next</button>
      </div> */}
    </div>
  );
};

export default SlickSlider;
