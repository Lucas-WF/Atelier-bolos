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

        function encodeImage(inputedImage) {
            const file = inputedImage;
            const reader = new FileReader();
            reader.onloadend = function() {
              const loadedImage = JSON.stringify(reader.result)
              const imageArray = loadedImage.split("base64,")[1]
              setImage(imageArray[1])
            }
            reader.readAsDataURL(file);
          }

        function handleLogout(event) {
            event.preventDefault();
            localStorage.removeItem('admin_token');
            localStorage.removeItem('admin_username');
            window.open('/', '_self');
            history.push('/');
        }

        async function handleSubmit(event) {
            event.preventDefault();

            await api.post('/product/',
                {
                    name: name,
                    price: price,
                    description: description,
                    quantity: quantity,
                    date_created: date,
                    type: type,
                    image: image
                }).then(response => {
                    if (response.status === 201) {
                        alert('Produto adicionado com sucesso.');
                        window.open('/adminhome', '_self');
                        history.push('/adminhome');
                    }
                }).catch(error => {
                    alert('Dados incorretos.');
                });

        }

        return (
            <div className="home">
                <h1 class="text-center mt-5">Ol?? Confeiteiro {localStorage.getItem('admin_username')}!</h1>
                <h3 class="text-center">Insira aqui os dados do produto que voc?? quer publicar:</h3>
                <div class="container mx-auto text-center w-25 mt-5">
                    <form class="form text-center" onSubmit={handleSubmit}>
                        <div class="form-outline mb-4">
                            <input placeholder="Nome do produto" type="text" id="name" name="name" value={name} onChange={event => setName(event.target.value)} class="form-control" />
                        </div>
                        <div class="form-outline mb-4">
                            <input placeholder="Pre??o do produto" type="text" id="price" name="price" value={price} onChange={event => setPrice(event.target.value)} class="form-control" />
                        </div>
                        <div class="form-outline mb-4">
                            <input placeholder="Descri????o do produto" type="text" id="description" name="description" value={description} onChange={event => setDescription(event.target.value)} class="form-control" />
                        </div>
                        <div class="form-outline mb-4">
                            <input placeholder="N??mero de fatias" type="text" id="quantity" name="quantity" value={quantity} onChange={event => setQuantity(event.target.value)} class="form-control" />
                        </div>
                        <div class="form-outline mb-4">
                            <input placeholder="Data de inclus??o" type="date" id="date" name="date" value={date} onChange={event => setDate(event.target.value)} class="form-control" />
                        </div>
                        <div class="form-outline mb-4">
                            <input placeholder="Tipo de produto" type="text" id="type" name="type" value={type} onChange={event => setType(event.target.value)} class="form-control" />
                        </div>
                        <div class="mb-4">
                            <input placeholder="Imagem do produto" type="file" accept="image/*" id="image" name="image" onChange={event => encodeImage(event.target.files[0])} class="form-control" />
                        </div>
                        <button type="submit" class="btn btn-primary btn-block mb-4">Publicar</button>
                    </form>
                    <button onClick={handleLogout} class="rounded text-light btn-lg mt-4" style={{ "background-color": "rgb(224, 31, 105)", "border-color": "rgb(224, 31, 105)" }}>Sair</button>
                </div>
            </div>
        );
    }

    else if (localStorage.getItem('token')) {
        history.push('/');
    }

    else {
        history.push('/admin');
    }
}