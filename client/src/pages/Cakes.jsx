import React, { useState, useEffect } from "react";
import api from "../services/api.js"
import defaultImage from "../assets/img/cakes.jpg"
import "../assets/css/Image.css"


export default function Cakes({ history }) {
    const [products, setProducts] = useState([])

    async function addToCart(file) {
        history.push("/checkout/" + file)
    }

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get("/product")
            setProducts(response.data);
        }
        loadProducts();
    })

    function base64ToImage(file) {
        file = file.slice(0, file.length - 1);
        const image = new Image();
        image.src = "data:image/png;base64," + file;
        return image.src;
    }

    if (localStorage.getItem("token")) {
        return (
            <div className="cakes">
                <h1 class="text-center mt-5">Bolos</h1>
                <div class="container mt-5">
                    {products.length > 0 ? (
                        <div >
                            <div class="col-4"></div>
                            <div class="col-md-auto">
                                <div class="products">
                                    {products.map(product => (
                                        <div key={product.id} class="product mb-5">
                                            {product.image != null ? (
                                                <img src={base64ToImage(product.image)} alt="cakeImage" class="cakeImage" />
                                            ) :
                                                (
                                                    <img src={defaultImage} alt="default" class="cakeImage" />
                                                )
                                            }
                                            <div>
                                                <p class="productTitle">{product.name}</p>
                                                <p class="productDescription">{product.description}</p>
                                                <div class="productDiv" style={{ "height": "155px" }}>
                                                    <p class="productPrice">R${product.price}</p>
                                                    <button class="productButton" onClick={() => addToCart(product.id)}>Comprar</button>
                                                </div>
                                            </div>

                                        </div>
                                    )

                                    )}
                                </div>
                            </div>
                            <div class="col-4"></div>
                        </div>
                    ) :
                        (
                            <div className="empty"></div>
                        )
                    }


                </div>
            </div>
        );
    }
    else if (localStorage.getItem("admin_token")) {
        return (
            <div className="cakes">
                <h1 class="text-center mt-5">Bolos</h1>
                <div class="container mt-5">
                    {products.length > 0 ? (
                        <div >
                            <div class="col-4"></div>
                            <div class="col-md-auto">
                                <div class="products">
                                    {products.map(product => (
                                        <div key={product.id} class="product mb-5" >
                                            {product.image != null ? (
                                                <img src={base64ToImage(product.image)} alt="cakeImage" class="cakeImage"  />
                                            ) :
                                                (
                                                    <img src={defaultImage} alt="default" class="cakeImage" />
                                                )
                                            }
                                            <div>
                                                <p class="productTitle">{product.name}</p>
                                                <p class="productDescription">{product.description}</p>
                                                <div class="productDiv" style={{ "height": "155px" }}>
                                                    <p class="productPrice">R${product.price}</p>
                                                    <button class="productButton" onClick={() => history.push("/edit/"+product.id)} style={{"width":"170px"}}>Editar</button>
                                                </div>
                                            </div>

                                        </div>
                                    )

                                    )}
                                </div>
                            </div>
                            <div class="col-4"></div>
                        </div>
                    ) :
                        (
                            <div className="empty"></div>
                        )
                    }


                </div>
            </div>
        );
    }

    else {
        history.push('/');
    }
}