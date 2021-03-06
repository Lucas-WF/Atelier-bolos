import React from "react";
import logo from "../assets/img/logo.svg";
import "../assets/css/Logo.css";
import { Link } from "react-router-dom";

export default function Logo() {
    if (localStorage.getItem("admin_token")) {
        return (
            <div className="logo">
                <Link to="/adminhome">
                    <img src={logo} alt="logo" width="80" height="80" class="rotateImage"/>
                </Link>
            </div>
        )
    }

    else {
        return (
            <div className="logo">
                <Link to="/" class="logo">
                    <img src={logo} alt="logo" width="80" height="80" class="rotateImage" />
                </Link>
            </div>
        );
    }
}