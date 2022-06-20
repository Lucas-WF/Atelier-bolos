import React from "react";


export default function Cakes({ history}) {
    if (localStorage.getItem("token")) {
    return (
        <div className="cakes">
            <h1 class="text-center mt-5">Bolos</h1>
            <div className="container mx-auto text-center w-25 mt-5">
            </div>
        </div>
    );
    }
    else {
        history.push('/');
    }
}