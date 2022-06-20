import React, { useState } from "react";
import api from '../services/api.js'


export default function AdminHome({ history }) {
        const [name, setName] = useState('');
        const [price, setPrice] = useState('');
        const [description, setDescription] = useState('');
        const [quantity, setQuantity] = useState('');
        const [date, setDate] = useState('');
        const [type, setType] = useState('');
        const [image, setImage] = useState('');

    if (localStorage.getItem('admin_token')) {


        async function handleSubmit(event) {
            event.preventDefault();
    
            await api.post('/product', {

            }).then(response => {
                if (response.status === 200) {
                    localStorage.setItem('token', JSON.stringify(response.data));
                    history.push('/');
                }
            }).catch(error => {
                alert('Usuário ou senha incorretos');
            });
    
        }

        return (
            <div className="home">
                <h1 class="text-center mt-5">Olá Confeiteiro!</h1>
                <h3 class="text-center">Insira aqui os dados do produto que você quer publicar:</h3>
                <div className="container mx-auto text-center w-25 mt-5">
                    <form class="form text-center" onSubmit={handleSubmit}>
                        <div class="form-outline mb-4">
                            <input placeholder="Nome do produto" type="text" id="name" name="name" value={name} onChange={event => setName(event.target.value)} class="form-control" />
                        </div>
                        <div class="form-outline mb-4">
                            <input placeholder="Preço do produto" type="text" id="price" name="price" value={price} onChange={event => setPrice(event.target.value)} class="form-control" />
                        </div>
                        <div class="form-outline mb-4">
                            <input placeholder="Descrição do produto" type="text" id="description" name="description" value={description} onChange={event => setDescription(event.target.value)} class="form-control" />
                        </div>
                        <div class="form-outline mb-4">
                            <input placeholder="Número de fatias" type="text" id="quantity" name="quantity" value={quantity} onChange={event => setQuantity(event.target.value)} class="form-control" />
                        </div>
                        <div class="form-outline" mb-4>
                            <input placeholder="Data de inclusão" type="date" id="date" name="date" value={date} onChange={event => setDate(event.target.value)} class="form-control" />
                        </div>
                        <div class="form-outline mb-4">
                            <input placeholder="Tipo de produto" type="text" id="type" name="type" value={type} onChange={event => setType(event.target.value)} class="form-control" />
                        </div>
                        <div class="form-outline mb-4">
                            <input placeholder="Imagem do produto" type="file" id="image" name="image" value={image} onChange={event => setImage(event.target.value)} class="form-control" />
                        </div>
                        <button type="submit" class="btn btn-primary btn-block mb-4">Publicar</button>
                    </form>
                </div>
            </div>
        );
    }

    else {
        history.push('/admin');
    }
}