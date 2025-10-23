import React from "react";

export default function CartRow({prod}) {
    let [item,qtyInc,qtyDec]=prod;
    let { id, imgUrl, name, price, qty,stock} = item;
    return (
        <tr>
            <td>{id}</td>
            <td><img src={imgUrl} alt="" width="30" height="30" /></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                {
                    stock==0 && <span className="fw-bold text-danger">Out of Stock </span>
                }
                {
                    (stock>=1 && stock<=10) && <span className="fw-bold text-warning">Fewer Left Only</span>
                }
                {
                    stock>=11 && <span className="fw-bold text-success">Available</span>
                }
            </td>
            <td>
                <i className="btn fa fa-minus-circle" onClick={() => qtyDec(id)}></i>
                {qty}
                <i className="btn fa fa-plus-circle" onClick={() => qtyInc(id)}></i></td>
            <td>&#8377; {price * qty}</td>
        </tr>
    );
}