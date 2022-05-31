import {React, useState} from "react";
import api from "../services/api";

export default function Register( { history } ) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post('/register', {
            email: email,
            username: username,
            password: password
        });

        console.log(response.data);
        history.push('/login');
    }

    return (
        <div class="container text-center w-25">
            <form class="form-signin text-center" onSubmit={handleSubmit}>
                <div class="form-outline mb-4">
                    <label for="email" class="sr-only">Email</label>
                    <input placeholder="E-mail do usuário" type="email" id="email" name="email" value={email} onChange={event => setEmail(event.target.value)} class="form-control" />
                </div>

                <div class="form-outline mb-4">
                    <label for="username" class="sr-only">Nome de usuário</label>
                    <input placeholder="Nome de usuário" type="text" id="username" name="username" value={username} onChange={event => setUsername(event.target.value)} class="form-control" />
                </div>

                <div class="form-outline mb-4">
                    <label for="password" class="sr-only">Senha</label>
                    <input placeholder="Palavra-passe" type="password" id="password" name="password" value={password} onChange={event => setPassword(event.target.value)} class="form-control" />
                </div>

                <button type="submit" class="btn btn-primary btn-block mb-4">Criar</button>
                
            </form>
        </div>);
}