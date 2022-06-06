import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Nav from "./templates/Nav.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ForgotPass from "./pages/ForgotPass.jsx";

export default function Routes() {
    return (
        <BrowserRouter>
            <Nav />
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/forgotpass" component={ForgotPass} />

        </BrowserRouter>
    );
}