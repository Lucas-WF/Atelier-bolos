import React, { useState, useEffect } from "react";
import api from "../services/api.js"
import defaultImage from "../assets/img/cakes.jpg"
import { useParams } from "react-router-dom";


export default function Checkout({ history }) {
    const [product, setProdoct] = useState('')
    const [message, setMessage] = useState('')
    const [payment, setPayment] = useState('')


    async function handleSubmit(event) {
        event.preventDefault();
        alert("Produto comprado")
        history.push("/cakes")
    }


    const params = useParams();

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get("/product/" + params.id)
            setProdoct(response.data);
        }
        loadProducts();
    })

    function base64ToImage(file) {
        file = file.slice(0, file.length - 1);
        console.log(file)
        const image = new Image();
        image.src = "data:image/png;base64," + file;
        return image.src;
    }

    if (localStorage.getItem("token")) {
        return (
            <div>
                <h1 class="text-center mt-5">Faça o Pagamento</h1>
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-4"></div>
                        <div class="col-md-auto">
                            <div key={product.id} class="mb-5 text-center">
                                {product.image != null ? (
                                    <img src={base64ToImage(product.image)} alt="cakeImage" class="w-25" />
                                ) :
                                    (
                                        <img src={defaultImage} alt="default" class="w-25" />
                                    )
                                }
                                <h1>Nome: {product.name}</h1>
                                <h3>Descrição: {product.description}</h3>
                                <h3>Preço: R${product.price}</h3>
                                <h3>Fatias: {product.quantity}</h3>

                            </div>
                            <form onSubmit={handleSubmit}>
                                <div class="form-outline mb-4">
                                    <label for="message" class="sr-only">Mensagem</label>
                                    <input placeholder="Digite a mensagem" type="text" id="message" name="message" value={message} onChange={event => setMessage(event.target.value)} class="form-control" />
                                </div>
                                <div class="form-outline mb-4">
                                    <label for="message" class="sr-only">Pagamento</label>
                                    <input placeholder="Digite a quantia" type="text" id="payment" name="payment" value={payment} onChange={event => setPayment(event.target.value)} class="form-control" />
                                </div>
                                <button type="submit" class="btn btn-primary btn-block mb-4">Efetuar Pagamento</button>
                            </form>
                        </div>

                        <div class="col-4"></div>
                    </div>

                </div>

            </div>
        );
    }

    else {
        history.push("/")
    }
}
