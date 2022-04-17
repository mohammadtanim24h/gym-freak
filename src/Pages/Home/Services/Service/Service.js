import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Service.css";

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className="service-card">
            <img className="img-fluid" src={img} alt="" />
            <div className="service-details">
                <h3>{name}</h3>
                <p className="lead">${price}/week</p>
                <p className="lead">{description}</p>
                <button className="book-btn">Book Now</button>
            </div>
        </div>
    );
};

export default Service;
