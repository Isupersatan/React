import { useState } from "react";
import Button from "./Button";

export default function Counter() {
    let [count, setCount] = useState(0);

    function countInc() {
        setCount((c) => {//previos state
            return c + 1;
        });

        setCount(c => c + 1);
    }

    function countDec() {
        if (count === 0) return;
        setCount(count - 1);
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
                                <Button fun={countDec}>Decreament</Button>
                                <Button fun={countInc}>Increament</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}