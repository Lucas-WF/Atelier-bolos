import React from "react";
import Logo from "./Logo.jsx";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="navbar-brand"><Logo /></div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <Link to="/aboutus" class="nav-link text-light">Sobre nós</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/register" class="nav-link text-light">Criar conta</Link>
                    </li>
                    <li class="nav-item">
                        <button  class="border rounded btn-danger"><Link to="/login" class="nav-link text-light">Entrar</Link></button>
                    </li>
                </ul>
            </div>
        </nav>);
}