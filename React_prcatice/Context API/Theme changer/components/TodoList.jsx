import React, { useContext, useState } from "react";
import { ThemeContext } from "./ContextAPI";

export default function TodoList() {
   

    let [items, setItems] = useState([]);

    function handleAddItem(item) {

        setItems((items) => {
            return [...items, item];
        });
    }

    function handleDelete(id) {
        setItems((items) => {
            return items.filter((item) => item.id !== id);
        });
    }

    function handleCarried(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? {...item, carried: !item.carried } : item
            )
        );
    }

    return (
        <>
            <Form addList={handleAddItem} />
            <AllItems itemlist={items} onDelete={handleDelete} onCheck={handleCarried} />
            <Stats items={items} />
        </>
    );

}

function Form({ addList }) {

    const {theme} = useContext(ThemeContext);

    let [itemName, setItemName] = useState("");
    let [qty, setQty] = useState("");

    function addItem(e) {
        e.preventDefault();
        let newObj = { id: Math.round(Math.random() * 5), itemName, qty, carried: false }
        addList(newObj);
        setItemName("")
        setQty("")

    }


    return (
        <>
            <section className="container-fluid mt-5">
                <div className="row">
                    <div className="col-5 m-auto">
                        <div className="card">
                            <div className={`card-header ${theme==="dark" ? "bg-dark" : "bg-primary"} text-white text-center`}>
                                <h1>Todo List</h1>
                            </div>
                            <div className={`card-body ${theme==="dark" ? "bg-secondary" : "bg-primary-subtle"}`}>
                                <form onSubmit={addItem}>
                                    <div className="mb-2">
                                        <input value={itemName} type="text" onChange={(e) => setItemName(e.target.value)} className="form-control" placeholder="Enter Item Name" />
                                    </div>
                                    <div className="mb-2">
                                        <input type="text" value={qty} onChange={(e) => setQty(e.target.value)} className="form-control" placeholder="Enter Quantity" />
                                    </div>
                                    <input type="submit" name="" id="" className={`btn ${theme==="dark" ? "btn-dark" : "btn-primary"}`}/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function AllItems({ itemlist, onDelete, onCheck }) {
    return (
        <>
            {itemlist.length >= 1 && (<div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-5 m-auto">
                        <div className="card">
                            <ListItems items={itemlist} onDelete={onDelete} onCheck={onCheck} />
                        </div>
                    </div>
                </div>
            </div>)}

        </>
    );
}

function ListItems({ items, onDelete, onCheck }) {
    return (
        <>
            <ul className="list-group gap-2">
                {items.map((item) => (
                    <li key={item.id} className="list-group-item fw-bold bg-dark-subtle d-flex align-items-center justify-content-between">
                    <input className="form-check-input" type="checkbox" onChange={() => onCheck(item.id)} checked={item.carried}></input>
                    <span style={item.carried ? { textDecoration: "line-through" } : {}}>{item.qty} {item.itemName}</span>
                    <div className="btn" onClick={() => onDelete(item.id)}>❌</div>
                </li>
                ))
                }

            </ul>
        </>
    );
}

function Stats({ items }) {

    const {theme} = useContext(ThemeContext);
    let totalItems = items.length;
    let packedItems = items.filter(item => item.carried).length;
    let percentage = Math.round((packedItems/totalItems)*100);
    return (
        <>
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-5 m-auto">
                        <div className="card">
                            <div className={`card-body ${theme==="dark" ? "bg-dark" : "bg-primary"} text-white text-center`}>
                               <h1>{percentage===100 && "All Items Packed You are ready to go."}</h1>
                                <h1>{totalItems === 0 ? "Your List is empty" : `You need to pack ${totalItems - packedItems} items and packed ${packedItems} items (${percentage}%)`}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}