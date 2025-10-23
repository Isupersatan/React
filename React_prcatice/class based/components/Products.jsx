import { Component } from "react"

let items = [{
    id: 101,
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQhU7dJtF9rLXtb1_e30rF-ch_i4Ex63adbA&s",
    name: "Samsung",
    price: 60000,
    qty: 1,
    stock: 12
},
{
    id: 102,
    imgUrl: "data:image/jpeg;base64,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",
    name: "I Phone",
    price: 80000,
    qty: 1,
    stock: 9
},
{
    id: 103,
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlieIQo6o7w5ILFvUXhgacGp3m0yspaae_rQ&s",
    name: "Google Pixel",
    price: 40000,
    qty: 1,
    stock: 0
}];

export default class Product extends Component {
    constructor(){
        super();
        this.state={
            products: items
        }
        this.qtyInc = this.qtyInc.bind(this);
    }

    

 qtyInc(id){
        let updatesItem = this.state.products.map(item=>{
            if(item.id === id) return {...item,qty:item.qty+1};
            else return item;
        });

        this.setState((prev)=>({products:updatesItem}));
    }

    render() {
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
                            {this.state.products.map((item) => {
                                let {id,imgUrl,name,price,stock,qty}=item;
                                return (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td><img src={imgUrl} alt="" width="30" height="30" /></td>
                                        <td>{name}</td>
                                        <td>{price}</td>
                                        <td>
                                            {
                                                stock == 0 && <span className="fw-bold text-danger">Out of Stock </span>
                                            }
                                            {
                                                (stock >= 1 && stock <= 10) && <span className="fw-bold text-warning">Fewer Left Only</span>
                                            }
                                            {
                                                stock >= 11 && <span className="fw-bold text-success">Available</span>
                                            }
                                        </td>
                                        <td>
                                            <i className="btn fa fa-minus-circle" ></i>
                                            {qty}
                                            <i className="btn fa fa-plus-circle" onClick={() => this.qtyInc(id)}></i></td>
                                        <td>&#8377; </td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>
                </section>
            </>
        );
    }
}