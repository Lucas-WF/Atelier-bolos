import React from "react";
import { Link } from "react-router-dom";
import cake from "../assets/img/bolo-img.png";
import cupcake from "../assets/img/cupcake-img.png";


export default function Cards() {
    return (
        <div className="cards" class="d-flex flex-row mt-5 justify-content-center" style={{width: "100%"}}>
            <div className="card-left">
                <Link class="text-decoration-none" to="/cakes">
                    <div className="card" class="mt-4 mr-5" style={{width: "22rem", height:"313px", "background-color": "rgb(224, 31, 105)", "border-color": "rgb(224, 31, 105)", "border-radius": "30px"}}>
                        <div className="card-body text-light">
                            <h1 className="card-title">Bolos</h1>
                            <figure className="figure"> <img src={cake} className="figure-img img-fluid ml-auto w-50 float-right" alt="..."/></figure>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="card-right">
                <Link class="text-decoration-none" to="/cupcakes">
                    <div className="card" class="mt-4 ml-5" style={{width: "22rem", height:"313px", "background-color": "rgb(224, 31, 105)", "border-color": "rgb(224, 31, 105)", "border-radius": "30px"}}>
                        <div className="card-body text-light">
                            <h1 className="card-title">Cupcakes</h1>
                            <figure className="figure"> <img src={cupcake} className="figure-img img-fluid ml-auto w-50 float-right" alt="..." /></figure>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}