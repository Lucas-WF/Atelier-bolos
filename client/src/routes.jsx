import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Nav from "./templates/Nav.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Admin from "./pages/Admin.jsx"
import AdminHome from "./pages/AdminHome.jsx"
import Cakes from "./pages/Cakes.jsx";
import Cupcakes from "./pages/Cupcakes.jsx";
import Account from "./pages/Account.jsx";
import Contact from "./pages/Contact.jsx";
import Edit from "./pages/Edit.jsx";
import Checkout from "./pages/Checkout.jsx";

export default function Routes() {
    return (
        <BrowserRouter>
            <Nav />
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/admin" component={Admin} />
            <Route path="/adminhome" component={AdminHome} />
            <Route path="/cakes" component={Cakes} />
            <Route path="/cupcakes" component={Cupcakes} />
            <Route path="/account" component={Account} />
            <Route path="/contact" component={Contact} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/checkout/:id" component={Checkout} />
            
        </BrowserRouter>
    );
}