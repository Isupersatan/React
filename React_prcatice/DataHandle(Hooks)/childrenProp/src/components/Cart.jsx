import { useState } from "react";

export default function Cart() {

    let [item, setItem] = useState({
        id: 101,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQhU7dJtF9rLXtb1_e30rF-ch_i4Ex63adbA&s",
        name: "Samsung",
        price: 60000,
        qty: 1
    });

    let { id, imgUrl, name, price, qty } = item;

    function qtyInc() {
        setItem(item => ({ ...item, qty: item.qty + 1 }));
    }

    function qtyDec() {
        setItem(item => ({ ...item, qty: item.qty > 1 ? qty - 1 : 0 }));
    }


    return (
        <>
            <section className="fluid-container m-3">
                <div className="row">
                    <div className="col">
                        <h1> 🛒 Cart:</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure culpa necessitatibus expedita voluptate. Recusandae, ipsam! Sit labore maxime, ab iure neque accusamus, eligendi suscipit officia voluptate aut tenetur quibusdam ipsum
                        </p>
                        <h2>Items:</h2>
                        <table className="table text-center table-bordered ">
                            <thead className="">
                                <tr className="table-dark">
                                    <th>Id</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{id}</td>
                                    <td><img src={imgUrl} alt="" width="30" height="30" /></td>
                                    <td>{name}</td>
                                    <td>{price}</td>
                                    <td>
                                        <i className="btn fa fa-minus-circle" onClick={qtyDec}></i>
                                        {qty}
                                        <i className="btn fa fa-plus-circle" onClick={qtyInc}></i></td>
                                    <td>{price * qty}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}