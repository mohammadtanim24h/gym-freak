import React from "react";
import "./Footer.css";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 copyright">
                        <div>
                            <h2 className="text-center">Gym Freak</h2>
                            <p className="text-center">
                                {" "}
                                &copy;Copyright All Rights Reserved {year}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 social d-flex justify-content-around align-items-center">
                        <div className="footer-social">
                            <li>
                                <a href="#facebook">
                                    <BsFacebook /> Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#twitter">
                                    <BsTwitter /> Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#instagram">
                                    <AiFillInstagram /> Instragram
                                </a>
                            </li>
                            <li>
                                <a href="#youtube">
                                    <AiFillYoutube /> Youtube
                                </a>
                            </li>
                        </div>
                        <div className="footer-social">
                            <li>
                                <a href="#about">About Me</a>
                            </li>
                            <li>
                                <a href="#contact">Contact Me</a>
                            </li>
                            <li>
                                <a href="#offers">Offers</a>
                            </li>
                            <li>
                                <a href="#faq">FAQ</a>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
