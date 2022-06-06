import {React, useState} from "react";
import api from '../services/api.js'


export default function ForgotPass({ history }) {
    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        await api.post('/password/reset', {
            email: email,
        }).then(response => {
            if (response.status === 200) {
                history.push('/login');
            }
        }).catch(error => {
        });

    }

    return (
        <div class="container mx-auto text-center w-25 mt-5">
            <h1 class="mb-5">Recupere sua conta</h1>
            <form class="form-signin text-center" onSubmit={handleSubmit}>
                <div class="form-outline mb-4">
                    <label for="email" class="sr-only">Email</label>
                    <input placeholder="Digite seu email" type="email" id="email" name="email" value={email} onChange={event => setEmail(event.target.value)} class="form-control" />
                </div>

                <button type="submit" class="btn btn-primary btn-block mb-4">Enviar</button>

            </form>
        </div>);
}