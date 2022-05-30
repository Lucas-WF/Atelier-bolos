import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/login" component={Login} />
        </BrowserRouter>
    );
}