import React from "react";
import logo from "../assets/img/bolo.jpg";

export default function Logo() {
    return (
        <div className="logo">
            <a href="/" className="logo">
                <img src={logo} alt="logo" />
            </a>
        </div>
    );
}