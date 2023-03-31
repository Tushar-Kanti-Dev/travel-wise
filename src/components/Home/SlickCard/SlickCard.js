import React from 'react';
import { Card, } from 'react-bootstrap';

const SlickCard = ({photo}) => {
    const {img} = photo;
    return (
        <div className="container">
            <Card className='img-fluid'
                style={{
                    width: 300,
                    height: 300,
                    margin: 10,
                    border: "1px solid rgb(49,54,61)",
                    backgroundColor: "#0d1117",
                    color: "rgba(255, 255, 255, 0.51",
                }}>
                    <img src={img} alt="" />
            </Card>
        </div>
    );
};

export default SlickCard;