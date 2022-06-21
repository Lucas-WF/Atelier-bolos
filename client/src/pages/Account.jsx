import React from "react";


export default function Account( { history }) {

    function handleLogout(event) {
        event.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        localStorage.removeItem('name');
        localStorage.removeItem('number');
        window.open('/', '_self');
        history.push('/');
    }

    if (localStorage.getItem("token")) {
    return (
        <div className="account">
            <h1 class="text-center mt-5">Conta</h1>
            <div class="container mx-auto text-center w-25 mt-5">
                <ul class="list-group">
                    <li class="list-group-item text-left">
                        <strong>Nome:</strong> {localStorage.getItem("name")}
                    </li>
                    <li class="list-group-item text-left">
                        <strong>Nome de Usuário:</strong> {localStorage.getItem("username")}
                    </li>
                    <li class="list-group-item text-left">
                        <strong>Email:</strong> {localStorage.getItem("email")}
                    </li>
                    <li class="list-group-item text-left">
                        <strong>Número de telemóvel:</strong> {localStorage.getItem("number")}
                    </li>
                </ul>
                <button onClick={handleLogout} class="rounded text-light btn-lg mt-4" style={{ "background-color": "rgb(224, 31, 105)", "border-color": "rgb(224, 31, 105)" }}>Sair</button>
            </div>
        </div>
    );
}
    else {
        history.push('/');
    }  
}