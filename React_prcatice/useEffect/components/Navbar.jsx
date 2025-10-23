import React, { useContext, useEffect, useState } from "react";
import Product from "./Product";



export default function Navbar() {

    let [items, setItems] = useState([]);

    useEffect(() => { fetchData() }, [])

    async function fetchData() {
        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();
        setItems(data);
    }

    return (
        <>
            <nav className=" navbar  bg-dark navbar-dark ">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand" >🛒Amazon</a>
                </div>
            </nav>

            <section className="container-fluid mt-3">
                <div className="row">
                    {
                         
                        items.length >= 1 && items.map(item => <Product item={item}/>)
                    }
                </div>
            </section>

        </>
    );
}