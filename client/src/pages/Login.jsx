import React, { useState } from "react";
import api from '../services/api.js'
import { Link } from 'react-router-dom'
import "../assets/css/Auth.css";

export default function Login({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        await api.post('/login', {
            email: email,
            password: password
        }).then(response => {
            if (response.status === 200) {
                history.push('/');
            }
        }).catch(error => {
        });

    }

    return (
        <div class="container mx-auto text-center w-25 mt-5">
            <h1 class="mb-5">Bolinhooo...</h1>
            <form class="form-signin text-center" onSubmit={handleSubmit}>
                <div class="form-outline mb-4">
                    <input placeholder="E-mail do usuário" type="email" id="email" name="email" value={email} onChange={event => setEmail(event.target.value)} class="form-control" />
                </div>

                <div class="form-outline mb-4">
                    <input placeholder="Palavra-passe" type="password" id="password" name="email" value={password} onChange={event => setPassword(event.target.value)} class="form-control" />
                </div>

                <div class="row mb-4">
                    <div class="col">
                        <p><Link to="/forgotpass">Esqueceu a senha?</Link></p>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary btn-block mb-4">Entrar</button>

                <div class="text-center">
                    <p>Não tem uma conta? <Link to="/register">Registre-se</Link></p>
                </div>
            </form>
        </div>
    );
}