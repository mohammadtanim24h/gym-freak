import React from "react";
import "./Benefits.css";
import team from "../../../images/team.jpg";
import equipment from "../../../images/equipment.jpg";

const Benefits = () => {
    return (
        <div className="benefits-section">
            <h1 className="benefit-title">FRESH AND FUN WORKOUTS</h1>
            <div className="benefits">
                <div className="benefit-card-team">
                    <img className="img-fluid" src={team} alt="" />
                    <div>
                        <h2>HIGHLY MOTIVATING</h2>
                        <p className="lead text-center">
                            Start your healthy lifestyle today
                        </p>
                    </div>
                </div>
                <div className="benefit-card-gym">
                    <div className="free">
                        <h2>NEW GYM EXPERIENCE</h2>
                        <p className="lead text-center">
                            Try your first training for free
                        </p>
                    </div>
                    <img className="img-fluid" src={equipment} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Benefits;
