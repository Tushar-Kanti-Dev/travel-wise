import React from "react";
import { Card, } from "react-bootstrap";
import { Link } from "react-router-dom";
import cox from '../../components/assets/images/cox.jpg'

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 d-flex flex-column justify-content-center ">
          <h1>COX'S BAZAR</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
            quaerat.
          </p>
          <p>Lorem ipsum dolor sit amet.</p>
          <button className="w-50">BOOK Now</button>
        </div>
        <div className="col-lg-8 d-flex flex-column justify-content-center ">
          <Card style={{ width: "18rem" }}>
            {/* <Link to='/about'><img src={cox} alt="" /></Link> */}
            <Link to="/ about"><img className="img-fluid" src={cox} alt="" />
            <h1>COX'S BAZAR</h1>
            </Link>
            
          </Card>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
