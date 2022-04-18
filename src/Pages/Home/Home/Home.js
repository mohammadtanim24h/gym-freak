import React from "react";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <div className="banner">
                <div className="container">
                    <div className="banner-text-container d-flex justify-content-start align-items-center">
                        <div>
                            <h1>KEEP YOUR BODY FIT</h1>
                            <h1>
                                AND <span className="theme-text">STRONG</span>
                            </h1>
                            <h3 className="text-light">
                                With Tanim AKA the{" "}
                                <span className="theme-text">GYM FREAK</span>
                            </h3>
                            <button className="contact-btn">
                                LET'S TRAIN NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;
