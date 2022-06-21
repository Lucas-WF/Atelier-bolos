import React, { useState, useEffect } from "react";
import api from "../services/api.js"


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

    const b64toBlob = (b64Data, sliceSize=512) => {
        const contentType = "image/png"
        const byteCharacters = atob(b64Data);
        const byteArrays = [];
      
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          const slice = byteCharacters.slice(offset, offset + sliceSize);
      
          const byteNumbers = new Array(slice.length);
          for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }
      
          const byteArray = new Uint8Array(byteNumbers);
          byteArrays.push(byteArray);
        }
      
        const blob = new Blob(byteArrays, {type: contentType});
        const blobUrl = URL.createObjectURL(blob);
        const img = document.createElement('img');
        img.src = blobUrl;
        document.body.appendChild(img);
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
                                {product.name}
                                {product.image != null ? (
                                    b64toBlob(product.image)
                                ) :
                                (
                                    <p>A</p>
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