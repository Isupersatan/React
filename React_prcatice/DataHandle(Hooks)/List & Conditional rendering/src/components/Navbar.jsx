import React, { useState } from "react";
import Cart from "./Cart";


export default function Navbar() {
    let [loggedIn, setLogin] = useState(false);

    function logIn() {
        setLogin(true);
    }

    function logOut() {
        setLogin(false);
    }
    return (
        <>
            <nav className="navbar bg-dark navbar-dark">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">🛒Amazon</a>
                    <div>
                        {loggedIn ? <button className="btn btn-light btn-sm" onClick={logOut}>LogOut</button> : <button className="btn btn-light btn-sm me-2" onClick={logIn} >Login</button>}

                    </div>
                </div>
            </nav>
            {loggedIn ? <Cart /> : <h1>Welcome,Login First </h1>}

        </>
    );
}