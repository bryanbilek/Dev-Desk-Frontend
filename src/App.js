import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import TicketList from "./components/TicketList";
import PrivateRoute from "./components/PrivateRoute";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="homepage">
        <NavBar />
        <Footer />
      </div>
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
      <PrivateRoute exact path="/homepage" component={TicketList} />
    </div>
  );
}

export default App;
