import React from 'react';

import TicketEntry from "./components/TicketEntry";
import './App.css';

function App() {
  return (
    <div className="container-fluid app_container">
      <p className="app_header">Create A Ticket</p>
      <TicketEntry />
    </div>
  );
}

export default App;
