import React from "react";
import Logo from "./Logo.jsx";
import { Link } from "react-router-dom";
import AccountIcon from "./AccountIcon.jsx";

export default function Nav() {
    
    if (localStorage.getItem("token")) {
        return (
            <nav class="navbar navbar-expand-md navbar-light" style={{"background-color": "rgb(255, 217, 231)"}}>
                <div class="navbar-brand"><Logo /></div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
    
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <h5><Link to="/aboutus" class="nav-link" style={{"color": "rgb(224, 31, 105)"}}>Sobre nós</Link></h5>
                        </li>
                        <li class="nav-item">
                            <h5><Link to="/contact" class="nav-link" style={{"color": "rgb(224, 31, 105)"}}>Contato</Link></h5>
                        </li>
                        <li class="nav-item">
                            <h5><Link to="/cart" class="nav-link" style={{"color": "rgb(224, 31, 105)"}}>Carrinho</Link></h5>
                        </li>
                    </ul>
                    <AccountIcon />
                </div>
            </nav>);
    }

    else if (localStorage.getItem("admin_token")) {
        return (
            <nav class="navbar navbar-expand-md navbar-light" style={{"background-color": "rgb(255, 217, 231)"}}>
            <div class="navbar-brand"><Logo /></div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <h5><Link to="/aboutus" class="nav-link" style={{"color": "rgb(224, 31, 105)"}}>Sobre nós</Link></h5>
                    </li>
                    <li class="nav-item">
                        <h5><Link to="/contact" class="nav-link" style={{"color": "rgb(224, 31, 105)"}}>Contato</Link></h5>
                    </li>
                    <li class="nav-item">
                        <h5><Link to="/cakes" class="nav-link" style={{"color": "rgb(224, 31, 105)"}}>Bolos</Link></h5>
                    </li>
                    <li class="nav-item">
                        <h5><Link to="/cupcakes" class="nav-link" style={{"color": "rgb(224, 31, 105)"}}>Carrinho</Link></h5>
                    </li>
                </ul>
            </div>
        </nav>
        );
    }

    else {
    return (
        <nav class="navbar navbar-expand-md navbar-light" style={{"background-color": "rgb(255, 217, 231)"}}>
            <div class="navbar-brand"><Logo /></div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <h5><Link to="/aboutus" class="nav-link" style={{"color": "rgb(224, 31, 105)"}}>Sobre nós</Link></h5>
                    </li>
                    <li class="nav-item">
                        <h5><Link to="/register" class="nav-link" style={{"color": "rgb(224, 31, 105)"}}>Criar conta</Link></h5>
                    </li>
                    <li class="nav-item">
                        <button class="rounded" style={{ "background-color": "rgb(224, 31, 105)", "border-color": "rgb(224, 31, 105)" }}><Link to="/login" class="nav-link text-light">Entrar</Link></button>
                    </li>
                </ul>
            </div>
        </nav>);
    }
}