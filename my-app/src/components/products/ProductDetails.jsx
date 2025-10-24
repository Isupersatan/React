import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails(){
    let{id}=useParams();
    useEffect(()=>{fetchData()},[]);
    async function fetchData() {
        let res = await fetch(`https://fakestoreapi.com/products/${id}`);
        let data = await res.json();
        console.log(data);
    }
    return(
        <>
            <section>
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-3">

                            </div>
                            <div className="col-8">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}