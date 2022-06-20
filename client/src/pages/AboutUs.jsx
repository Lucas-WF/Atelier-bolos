import React from "react";
import "../assets/css/AboutUs.css"

export default function AboutUs() {
    return (
        <div class="layered-image">
            <h1 className="about-us" class="mt-5 text-white text-center">Sobre nós</h1>
            <div className="container mx-auto text-center w-50 mt-5">
                <p className="about-us-body-1" class="mt-5 text-white text-center h4">
                    A nossa empresa nasceu no ensino médio, a escola foi o ponta pé inicial para a construção desse grande sonho, na qual, três jovens que precisavam arranjar um jeito de conseguir dinheiro para a viagem de formatura, não tinham ideia de que a venda de bolos iria dar muito certo.
                </p> 
                <p className="about-us-body-2" class="mt-5 text-white text-center h4"> A partir daí, a nossa admiração por doces e bolos cresceu constantemente, já o nosso sonho de criar uma empresa estava cada vez mais perto. 
                    O segredo da nossa empresa é o cuidado, qualidade e amor com o que fazemos, isso resultou no nosso sucesso, sendo uma das docerias mais famosas da cidade de Fortaleza. 
                    Nós queremos crescer cada vez mais, mostrando para o mundo os nossos produtos de qualidades.
                </p>
            </div>
        </div>
    );
}