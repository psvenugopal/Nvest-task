import React from "react";


const SelectedTickets = (props) => {

    const renderDigit = (ticket) => {
        return ticket.split("").map((num, key) => {
            return (
                <span key={key} className="number">{num}</span>
            )
        })
    }

    const renderTicket = () => {
        return props.selectedTickets.map((ticket, key) => {
            return (<div key={key} className="card ticket_card" style={{ width: "18rem", height: "104px" }}>
                <div className="card-body ">
                    <i className="fa fa-trash-o delete_icon text-center" onClick={() => props.deleteTicket(ticket)}></i>
                    <div className="badge badge-light text-center ticket">Ticket #{key + 1}</div>
                    <div className="ticket_numbers">
                        {renderDigit(ticket)}
                    </div>
                </div>
            </div>)
        })
    };


    return (
        <React.Fragment>
            <div className="ticket_container">
                <p className="ticket_header">Your Selected Tickets :</p>
                {renderTicket()}
            </div>
        </React.Fragment>
    )
};

export default SelectedTickets;