import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  //links to the specified component
  return (
    <div className="nav-bar">
      <Link to="/Register">Register</Link>
      <Link to="/TicketList">Tickets</Link>
      <Link to="/Login">Log In</Link>
    </div>
  );
};

export default NavBar;
