import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Service.css";

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <Card style={{ width: "22rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <button className="book-btn">Book now</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;
