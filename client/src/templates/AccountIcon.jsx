import React from "react";
import icon from "../assets/img/icon.svg";
import { Link } from "react-router-dom";


export default function AccountIcon() {
    return (
        <div className="account">
            <Link to="/account">
                <img src={icon} alt="icon" width="80" height="80"/>
            </Link>
        </div>
    );
}