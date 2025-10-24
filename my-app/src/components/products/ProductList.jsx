import { useState, useEffect } from 'react';
import Product from './Product';
import Loader from './Loader';
import ErrorMsg from './ErrorMsg';

export default function ProductList() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        fetchAPI();
    }, []);

    async function fetchAPI() {
        setLoading(true);
        try {
            let res = await fetch('https://fakestoreapi.com/products');
            if (!res.ok) throw new Error("Failed to fetch products");
            let data = await res.json();
            setItems(data);
        } catch (error) {
            console.error(error);
            setErrorMsg("Something went wrong while fetching products.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <section className='container-fluid mt-3'>
                {loading ? <Loader />
                    : errorMsg ? (
                        <ErrorMsg msg={errorMsg} />
                    ) :
                        <div className="row">
                            {items.length > 0 &&
                                items.map(item => <Product item={item} key={item.id} />)}
                        </div>}

            </section>
        </>
    );
}