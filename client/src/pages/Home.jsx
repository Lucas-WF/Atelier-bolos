import React from "react";
import "../assets/css/MarginTop.css"

export default function Home() {
    if (localStorage.getItem('token')) {
        return (
            <div className="home">
                <h1 class="text-center mt-5">Bem-vindo ao nosso Ateliê!</h1>

            </div>
        );

    } else {
        return (
            <div className="home">
                <h1 class="text-center mt-5">Bem-vindo ao nosso Ateliê!</h1>
            </div>
        );
    }
}