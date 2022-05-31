import React from "react";
import logo from "../assets/img/logo.svg";
import "../assets/css/Logo.css";

export default function Logo() {
    return (
        <div className="logo">
            <a href="/" class="logo">
            <img src={logo} alt="logo" width="90" height="90" class="rotateImage"/>
            </a>
        </div>
    );
}