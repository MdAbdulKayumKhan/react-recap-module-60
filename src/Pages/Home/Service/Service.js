import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, price, description, img} = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <h6>{price}</h6>
        </div>
    );
};

export default Service;