import React from "react";
import "../assets/css/MarginTop.css"
import { Link } from "react-router-dom";
import Cards from "../templates/Cards";

export default function Home() {
    if (localStorage.getItem('token')) {
        return (
            <div className="home">
                <h1 class="text-center mt-5">Olá!</h1>
                <h3 class="text-center">Escolha a opção desejada:</h3>
                <Cards />
            </div>
        );

    } else {
        return (
            <div className="home">
                <h1 class="text-center mt-5">Seja bem-vindo ao nosso Ateliê!</h1>
                <h3 class="text-center mt-5">Para continuar, faça login ou registre-se</h3>
                <div class="container mx-auto text-center w-25 mt-5">
                    <Link to="/login">
                        <button type="submit" class="btn btn-primary btn-block mb-2">Login</button>
                    </Link>
                    <Link to="/register">
                        <button type="submit" class="btn btn-primary btn-block mb-2">Registrar</button>
                    </Link>
                    <Link to="/admin">
                        <button type="submit" class="btn btn-primary btn-block mb-2">Sou um confeiteiro</button>
                    </Link>
                </div>
            </div>
        );
    }
}