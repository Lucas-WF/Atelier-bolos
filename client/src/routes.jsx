import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Nav from "./templates/Nav.jsx";

export default function Routes() {
    return (
        <BrowserRouter>
            <Nav />
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </BrowserRouter>
    );
}