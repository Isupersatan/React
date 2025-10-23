import React, { useContext, useEffect, useState } from "react";
import Product from "./Products";



export default function Navbar() {


    return (
        <>
            <nav className=" navbar  bg-dark navbar-dark ">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand" >🛒Amazon</a>
                </div>
            </nav>
            <Product/>
        </>
    );
}