import React from "react";
import "./product.css"

export default function product({item}) {
    let {title,image,price,rating} = item
    return (
        <>
            <div className="col-3 mt-3"  key={item.id}>
                <div className="card">
                    <div className="card-header">
                        <img src={image} alt="image not available" className="card-img-top"/>
                    </div>
                    <div className="card-body text-center">
                        <h6>{title}</h6>
                        <h4>💲{price}</h4>
                        <h5>⭐ {rating.rate}</h5>
                    </div>
                </div>
            </div>
        </>
    );
}