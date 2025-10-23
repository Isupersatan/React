import { useState } from "react";
import CartRow from "./CartRow";
import products from "./products";


export default function Cart() {

    let [items, setItem] = useState(products);

    function qtyInc(id) {
        let updateArr = items.map((item) => {
            if (item.id === id) {
                return { ...item, qty: (item.stock > 0) ? item.qty + 1 : 0 };
            } else return item;
        });

        setItem(updateArr);
    }

    function qtyDec(id) {
        let updateArr = items.map((item) => {
            if (item.id === id) {
                return { ...item, qty: (item.qty > 1) ? item.qty - 1 : 0 };
            } else return item;
        });

        setItem(updateArr);
    }

    function grandTotal() {
        let sum = 0
        for (let item of items) {
            sum = sum + (item.qty * item.price)
        }
        return sum;
    }

    return (
        <>
            <section className="container-fluid mt-3">
                <div className="row">
                    <div className="col">
                        <h1> 🛒 Cart:</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure culpa necessitatibus expedita voluptate. Recusandae, ipsam! Sit labore maxime, ab iure neque accusamus, eligendi suscipit officia voluptate aut tenetur quibusdam ipsum
                        </p>
                    </div>
                </div>
            </section>

            <section className="container-fluid">
                
                <table className="table text-center table-bordered mt-2">
                    <thead>
                        <tr className="table-dark">
                            <th>Id</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => {
                            return <CartRow prod={[item, qtyInc, qtyDec]} />;
                        })}
                        <tr>
                            <td colSpan={5}></td>
                            <td className="fw-bold">Grand Total</td>
                            <td className="fw-bold">&#8377; {grandTotal()}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    );
}