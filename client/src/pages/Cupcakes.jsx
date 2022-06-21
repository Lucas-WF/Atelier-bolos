import React from "react";


export default function Cupcakes({ history }) {
    if (localStorage.getItem("token")) {
        return (
            <div className="cupcakes">
                <h1 class="text-center mt-5">Cupcakes</h1>
                <div class="container mx-auto text-center w-25 mt-5">
                </div>
            </div>
        );
        
    }
    
    else if (localStorage.getItem("admin_token")) {
        return (
            <div className="cupcakes">
                <h1 class="text-center mt-5">Cupcakes</h1>
                <div class="container mx-auto text-center w-25 mt-5">
                </div>
            </div>
        );
    }

    else {
        history.push('/');
    }
}
