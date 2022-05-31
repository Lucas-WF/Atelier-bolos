import React from "react";
import Logo from "./Logo.jsx";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <Logo />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link class="nav-link text-light" to="/">Sobre nós</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-light" to="/login">Entrar</Link>
                    </li>
                </ul>
            </div>
        </nav>);
}