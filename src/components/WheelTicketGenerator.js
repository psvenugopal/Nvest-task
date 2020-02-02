import React, { useState } from "react";


const WheelTicketGenerator = (props) => {
    const [animateClass, setAnimateClass] = useState("");

    const applyAnimation = () => {
        setAnimateClass("rotate");
        const randomTicketNumber = Math.floor(100000 + Math.random() * 900000);
        setTimeout(() => {
            props.updateTicketNumber(randomTicketNumber.toString());
            removeAnimation();
        }, 2000)
    };

    const removeAnimation = () => {
        setAnimateClass("");
    }

    return (
        <div className="col-xs-6 image_container">
            <p className="wheel_head">Click the wheel to generate random tickets</p>
            <div className="image">
                <img src={require('../Assets/Wheel-image.png')}
                    alt="Trulli"
                    className={`img-fluid wheel_image rounded mx-auto d-block ${animateClass}`}
                    onClick={applyAnimation}
                />
                <p className="badge badge-warning badge_text">Ticket number range: 100000 - 999999</p>
            </div>
        </div>
    )

};


export default WheelTicketGenerator;