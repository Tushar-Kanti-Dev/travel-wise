import React, { useEffect, useState } from "react";
import "./Home.css";
import SlickSlider from "./SlickSlider/SlickSlider";

const Home = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("photodata.json")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return (
    <div className="main-home">
      <div className="title-items">

        <div className="d-flex align-items-center flex-column justify-content-center">
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            possimus voluptatibus fuga esse eos, exercitationem ratione
            accusantium impedit quaerat amet?
          </p>
        </div>
      </div>

        <div className="w-100 overflow-hidden">
          <SlickSlider></SlickSlider>
        </div>
    </div>
  );
};

export default Home;
