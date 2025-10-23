import React, { useState } from "react";
import RegForm from "./RegForm";


export default function Navbar() {
    
    return (
        <>
            <nav className="navbar bg-dark navbar-dark">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">🛒Amazon</a>
                </div>
            </nav>
            <RegForm/>
        </>
    );
}