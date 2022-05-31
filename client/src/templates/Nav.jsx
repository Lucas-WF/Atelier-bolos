import React from "react";
import Logo from "./Logo.jsx";

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
                        <a class="nav-link text-light" href="/">Sobre nós</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="/">Entrar</a>
                    </li>
                </ul>
            </div>
        </nav>);
}