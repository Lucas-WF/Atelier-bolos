import {React, useState} from "react";
import api from '../services/api.js'

export default function Admin({ history }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        await api.post('/admin', {
            login: login,
            password: password
        }).then(response => {
            if (response.status === 200) {
                history.push('/');
            }
        }).catch(error => {
            alert('Dados incorretos.');
        });

    }
    return (
        <div class="container mx-auto text-center w-25 mt-5">
            <h1 class="mb-5">Página do Confeiteiro</h1>
            <form class="form-signin text-center" onSubmit={handleSubmit}>
                <div class="form-outline mb-4">
                    <input placeholder="Login do confeiteiro" type="text" id="login" name="login" value={login} onChange={event => setLogin(event.target.value)} class="form-control" />
                </div>

                <div class="form-outline mb-4">
                    <input placeholder="Palavra-passe" type="password" id="password" name="email" value={password} onChange={event => setPassword(event.target.value)} class="form-control" />
                </div>

                <button type="submit" class="btn btn-primary btn-block mb-4">Entrar</button>
            </form>
        </div>
    );
}