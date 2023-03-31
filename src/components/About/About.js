import React, { useEffect, useState } from 'react';

const About = () => {
    const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("photodata.json")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
    return (
        <div>
            <h2>This is about</h2>
            
        </div>
        

    );
};

export default About;