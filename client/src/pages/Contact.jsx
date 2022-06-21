import React from "react";
import whatsapp from "../assets/img/whatsapp.svg";
import telegram from "../assets/img/telegram.svg";
import mail from "../assets/img/mail.svg";
import phone from "../assets/img/telephone.svg";


export default function Contact() {
    return (
        <div class="container">
            <h2 class="text-center mt-5">Algumas maneiras de entrar em contato com a gente:</h2>
            <div class="container mx-auto text-center w-100 mt-5">
                <div class="d-flex justify-content-center">
                    <div class="pr-5 mr-5">
                        <img src={phone} alt="phone" />
                        <h3 class="text-center" style={{"color": "rgb(224, 31, 105)"}}>Telefone</h3>
                        <p class="text-center">(85) 9 8416-9032</p>
                    </div>
                    <div class="pr-5 mr-5">
                        <a href="https://api.whatsapp.com/send?phone=5585984169032&text=Ol%C3%A1!%20Sou%20cliente%20do%20Ateli%C3%AA%20de%20Bolos%20e%20gostaria%20de%20conversar%20sobre%20meu%20bolo!">
                            <img src={whatsapp} alt="whatsapp" class="img-fluid" />
                        </a>
                        <h3 class="text-center" style={{"color": "rgb(224, 31, 105)"}}>Whatsapp</h3>
                        <p class="text-center">(85) 9 8416-9032</p>
                    </div>
                    <div class="pr-5 mr-5">
                        <a href="https://t.me/ronysantts">
                            <img src={telegram} alt="telegram" class="img-fluid" />
                        </a>
                        <h3 class="text-center" style={{"color": "rgb(224, 31, 105)"}}>Telegram</h3>
                        <p class="text-center">(85) 9 8416-9032</p>
                    </div>
                    <div>
                        <a href="mailto:lucas.wf@outlook.com">
                            <img src={mail} alt="mail" class="img-fluid" />
                        </a>
                        <h3 class="text-center" style={{"color": "rgb(224, 31, 105)"}}>E-mail</h3>
                        <p class="text-center">Fale conosco!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}