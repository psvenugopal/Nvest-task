import React, { useState } from "react";

import WheelTicketGenerator from "./WheelTicketGenerator";


const GenerateTicket = (props) => {
    const [keyboardNumbers] = useState([7, 8, 9, 4, 5, 6, 1, 2, 3]);
    const [ticketNumber, setTicketNumber] = useState("");
    const [keyDisable, setKeyDisable] = useState(false);

    const renderKeys = (key) => {
        return (
            <button key={key} type="button" className="btn btn-outline-secondary py-3 col-4 key" disabled={keyDisable} onClick={handleClick}>{key}</button>
        )
    }

    const handleClick = (e) => {
        const newNumber = ticketNumber.concat(e.target.innerText);
        setTicketNumber(newNumber);
        disableKeyBoard(newNumber);
    };

    const inputChange = (e) => {
        setTicketNumber(e.target.value);
        disableKeyBoard(e.target.value);
    };

    const disableKeyBoard = (num) => {
        if (num && num.length === 6) {
            setKeyDisable(true);
        } else {
            setKeyDisable(false);
        }
    }

    const removeNumber = () => {
        setTicketNumber("");
        setKeyDisable(false);
    };

    const removeOneDigit = () => {
        const newNumber = ticketNumber.slice(0, ticketNumber.length - 1);
        setTicketNumber(newNumber);
        if(keyDisable){
            setKeyDisable(false);  
        }
    }

    const updateTicketNumber = (number) => {
        setTicketNumber(number);
        disableKeyBoard(number);
    }

    const addTicket = () => {
        props.addTicket(ticketNumber);
        setTicketNumber("");
        disableKeyBoard();
    }

    return (
        <div className="row">
            <div className="col-xs-6">
                <div className="btn-group-vertical ml-4 mt-4 mb-4 col-xs-6" role="group" aria-label="Basic example">
                    <div className="btn-group">
                        <input type="number" className="text-center form-control-lg col-12" min="0" style={{ height: "70px", marginLeft: "-15px" }} autoComplete="off" onChange={inputChange} value={ticketNumber} />
                        <span className="badge badge-warning badge_text card-text">Enter 6 digits</span>
                    </div>
                    <div className="row btn-group key_container">
                        {keyboardNumbers.map((key) => {
                            return renderKeys(key);
                        })}
                        <button type="button" className="btn btn-outline-secondary py-3 col-4 key" onClick={removeOneDigit}>
                            <i className="fa fa-close"></i>
                        </button>
                        <button type="button" className="btn btn-outline-secondary py-3 col-4 key" disabled={keyDisable}  onClick={handleClick}>0</button>
                        <button type="button" className="btn btn-outline-secondary py-3 col-4 key " style={{ color: "red" }} onClick={removeNumber}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                        <button type="button" className="btn btn-outline-secondary key" style={{ height: "40px" }} onClick={addTicket}>
                            <i className="fa fa-plus-square" style={{ fontSize: "20", Color: "red" }}></i> ADD TICKET</button>
                    </div>
                </div>
            </div>
            <WheelTicketGenerator
                updateTicketNumber={updateTicketNumber}
            />
        </div>
    )
};


export default GenerateTicket;