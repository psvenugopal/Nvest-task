import React, { useState, Fragment } from "react";

import GenerateTicket from "./GenerateTicket";
import SelectedTickets from "./SelectedTickets";


const TicketEntry = () => {
    const [showError, setShowError] = useState(false);
    const [selectedTickets, SetSelectedTickets] = useState([]);
    const [emptyInput, SetEmptyInput] = useState(false);
    const [errorMessage, SetErrorMessage] = useState("");

    const addTicket = (ticketNumber) => {
        if (ticketNumber.length < 6) {
            setShowError(true);
            SetErrorMessage("Ticket number must contain 6 digts, Please enter 6 digits...");
            setTimeout(() => {
                toggleError();
            }, 3000)
        } else {
            if (selectedTickets.length < 5) {
                SetSelectedTickets([...selectedTickets, ticketNumber]);
                SetEmptyInput(true);
            }else{
                setShowError(true);
                SetErrorMessage("You can add more than 5 tickets...");
                setTimeout(() => {
                    toggleError();
                }, 3000)
            }
        }
    };

    const toggleError = () => {
        setShowError(false);
        SetErrorMessage("");
    };

    const deleteTicket = (ticket) => {
        const newList = selectedTickets.filter((number) => {
            return number !== ticket
        });
        SetSelectedTickets([...newList]);
    }

    return (
        <Fragment>
            <div className="container inner_container">
                <GenerateTicket
                    addTicket={addTicket}
                    emptyInput={emptyInput}
                />
            </div>
            <SelectedTickets
                selectedTickets={selectedTickets}
                deleteTicket={deleteTicket}
            />
            {showError && errorMessage &&
                <div className="alert alert-danger error" role="alert">
                    {errorMessage}
            </div>
            }
        </Fragment>
    )
};

export default TicketEntry;