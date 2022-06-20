import React, { useEffect } from "react";
import api from "../services/api";


export default function Account( { history }) {
    const [user, setUser] = React.useState("");

    useEffect(() => {
        async function getUser() {
            const response = await api.get("/user");
            setUser(response.data);
        }
        getUser();
    }
    , []);

    

    if (localStorage.getItem("token")) {
    return (
        <div className="account">
            <h1 class="text-center mt-5">Account</h1>
            <div className="container mx-auto text-center w-25 mt-5">
                <ul className="list-group">
                    <li className="list-group-item">
                        <strong>Nome:</strong> {user.name}
                    </li>
                    <li className="list-group-item">
                        <strong>Email:</strong> {user.email}
                    </li>
                    <li className="list-group-item">
                        <strong>Username:</strong> {user.username}
                    </li>
                </ul>

            </div>
        </div>
    );
}
    else {
        history.push('/');
    }  
}