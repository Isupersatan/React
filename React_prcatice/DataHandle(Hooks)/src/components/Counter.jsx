import { useState } from "react";

export default function Counter() {
    let [count,setCount] = useState(0);

    function countInc(){
        setCount(count+1);
    }

    function countDec(){
        if(count<=0) return; 
        setCount(count-1);
    }

    return (
        <>
            <section className="container-fluid mt-3">
                <div className="row">
                    <div className="col-5 m-auto">
                        <div className="card">
                            <div className="card-header bg-dark text-white">
                                <h2>Counter App</h2>
                            </div>
                            <div className="card-body m-auto">
                                <h4 className="text-center">{count}</h4>
                                <div className="btn btn-danger me-2" onClick={countDec}>Decreament</div>
                                <div className="btn btn-success" onClick={countInc}>Increament</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}