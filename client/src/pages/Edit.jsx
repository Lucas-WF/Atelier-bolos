import React, { useState, useEffect } from "react";
import api from "../services/api.js"
import defaultImage from "../assets/img/cakes.jpg"
import { useParams } from "react-router-dom";


export default function Edit({ history }) {
    const [product, setProdocuts] = useState('')
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');

    const params = useParams();

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get("/product/" + params.id)
            setProdocuts(response.data);
        }
        loadProducts();
    })


    async function handleSubmit(event) {
        event.preventDefault();

        await api.patch('/product/'+params.id,
            {
                name: name,
                price: price,
                description: description,
                quantity: quantity
            }).then(response => {
                if (response.status === 201) {
                    alert('Produto editado com sucesso.');
                    window.open('/cakes', '_self');
                    history.push('/cakes');
                }
            }).catch(error => {
                alert('Dados incorretos.');
            });

    }


    function base64ToImage(file) {
        file = file.slice(0, file.length - 1);
        console.log(file)
        const image = new Image();
        image.src = "data:image/png;base64," + file;
        return image.src;
    }

    if (localStorage.getItem("admin_token")) {
        return (
            <div>
                <h1 class="text-center mt-5">Editar Produto</h1>
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-4"></div>
                        <div class="col-md-auto">
                            <div key={product.id} class="mb-5 text-center">
                                {product.image != null ? (
                                    <img src={base64ToImage(product.image)} alt="cakeImage" class="w-25" />
                                ) :
                                    (
                                        <img src={defaultImage} alt="default" class="w-25"/>
                                    )
                                }
                                <h1>Nome: {product.name}</h1>
                                <h3>Descrição: {product.description}</h3>
                                <h3>Preço: R${product.price}</h3>
                                <h3>Fatias: {product.quantity}</h3>
                            </div>
                        </div>
                        <div class="col-4"></div>
                    </div>
                </div>
                <h3 class="text-center">Insira aqui os dados do produto que você quer publicar:</h3>
                <div class="container mx-auto text-center w-25 mt-4">
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
                        <button type="submit" class="btn btn-primary btn-block mb-4">Editar</button>
                    </form>
                </div>
            </div>
        );
    }

    else {
        history.push("/")
    }
}
