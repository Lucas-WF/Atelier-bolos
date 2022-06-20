import { React, useState } from "react";
import api from "../services/api";
import "../assets/css/MarginTop.css";

export default function Register({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        await api.post('/register', {
            email: email,
            username: username,
            password: password,
            name: name,
            number: number
        }).then(response => {
            if (response.status === 201) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('username', response.data.username);
                localStorage.setItem('email', response.data.email);
                localStorage.setItem('name', response.data.name);
                localStorage.setItem('number', response.data.number);
                console.log(response.data);
                window.open('/', '_self');
                history.push('/');
            }
        }
        ).catch(error => {
            alert('Erro ao registrar usuário');
        }
        );
    }

    return (
        <div class="container mx-auto text-center w-25 mt-5">
            <h1 class="mb-5">Crie sua conta</h1>
            <form class="form-signin text-center" onSubmit={handleSubmit}>
                <div class="form-outline mb-4">
                    <label for="name" class="sr-only">Nome</label>
                    <input placeholder="Nome" type="text" id="name" name="name" value={name} onChange={event => setName(event.target.value)} class="form-control" />
                </div>

                <div class="form-outline mb-4">
                    <label for="number" class="sr-only">Número de telefone</label>
                    <input placeholder="Número de telemóvel" type="text" id="number" name="number" value={number} onChange={event => setNumber(event.target.value)} class="form-control" />
                </div>

                <div class="form-outline mb-4">
                    <label for="username" class="sr-only">Nome de usuário</label>
                    <input placeholder="Nome de usuário" type="text" id="username" name="username" value={username} onChange={event => setUsername(event.target.value)} class="form-control" />
                </div>

                <div class="form-outline mb-4">
                    <label for="email" class="sr-only">Email</label>
                    <input placeholder="E-mail do usuário" type="email" id="email" name="email" value={email} onChange={event => setEmail(event.target.value)} class="form-control" />
                </div>

                <div class="form-outline mb-4">
                    <label for="password" class="sr-only">Senha</label>
                    <input placeholder="Palavra-passe" type="password" id="password" name="password" value={password} onChange={event => setPassword(event.target.value)} class="form-control" />
                </div>

                <button type="submit" class="btn btn-primary btn-block mb-4">Criar</button>

            </form>
        </div>);
}