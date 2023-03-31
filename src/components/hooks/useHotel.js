import { useEffect, useState } from "react";

const useHotel = () =>{
    const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("photodata.json")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  return [photos, setPhotos];
}

export default useHotel;