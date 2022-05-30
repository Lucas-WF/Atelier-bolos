import React, { useState } from "react";
import api from '../services/api.js'

export default function Login({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post('/login', {
            email: email,
            password: password
        });

        console.log(response.data);
        history.push('/');
    }

    return (
        <div class="container text-center w-25">
            <form class="form-signin text-center" onSubmit={handleSubmit}>
                <div class="form-outline mb-4">
                    <input placeholder="E-mail do usuário" type="email" id="email" name="email" value={email} onChange={event => setEmail(event.target.value)} class="form-control" />
                </div>

                <div class="form-outline mb-4">
                    <input placeholder="Palavra-passe" type="password" id="password" name="email" value={password} onChange={event => setPassword(event.target.value)} class="form-control" />
                </div>

                <div class="row mb-4">
                    <div class="col">
                        <a href="#!">Esqueceu a senha?</a>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary btn-block mb-4">Entrar</button>

                <div class="text-center">
                    <p>Não tem uma conta? <a href="{{url_for('auth.register')}}">Registre-se</a></p>
                </div>
            </form>
        </div>
    );
}