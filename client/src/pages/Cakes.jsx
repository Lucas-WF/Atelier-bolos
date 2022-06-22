import React, { useState, useEffect } from "react";
import api from "../services/api.js"
import defaultImage from  "../assets/img/cakes.jpg"


export default function Cakes({ history }) {
    const [products, setProdocuts] = useState([])

    useEffect(() => {
        async function loadProducts() {
            await api.get("/product").then(response => {
                setProdocuts(response.data)
            }
            )
        }
        loadProducts()
    })

    function base64ToImage(file) {
        file = file.slice(0, file.length - 1)
        const image = new Image();
        image.src = "data:image/png;base64," + file
        return image.src
    }

    if (localStorage.getItem("token")) {
        return (
            <div className="cakes">
                <h1 class="text-center mt-5">Bolos</h1>
                <div class="container mx-auto text-center w-25 mt-5">
                    {products.length > 0 ? (
                    <ul>
                        {products.map(product => (
                            <li key={product.id}>
                                {product.image != null ? (
                                    <img src = {base64ToImage(product.image)} alt="cakeImage" class="w-50"/>
                                ) :
                                (
                                    <img src={defaultImage} alt="default" class="w-50"/>
                                )
                                }
                                
                            </li>
                        )

                        )}
                    </ul>
                    ) :
                    (
                        <div className="empty">Sem bolos no momento!</div>
                    )}


                </div>
            </div>
        );
    }
    else if (localStorage.getItem("admin_token")) {
        return (
            <div className="cakes">
                <h1 class="text-center mt-5">Bolos</h1>
                <div class="container mx-auto text-center w-25 mt-5">
                </div>
            </div>
        );
    }

    else {
        history.push('/');
    }
}