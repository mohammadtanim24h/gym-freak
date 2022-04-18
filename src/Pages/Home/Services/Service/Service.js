import React from "react";
import "./Service.css";
import { GiWeightLiftingUp } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    const navigate = useNavigate();
    return (
        <div className="service-card">
            <img className="img-fluid" src={img} alt="" />
            <div className="service-details">
                <h3>{name}</h3>
                <p className="lead">${price}/week</p>
                <p className="lead">{description}</p>
                <button onClick={() => navigate('/checkout')} className="book-btn">Book Now <GiWeightLiftingUp className="ms-2"/> </button>
            </div>
        </div>
    );
};

export default Service;
