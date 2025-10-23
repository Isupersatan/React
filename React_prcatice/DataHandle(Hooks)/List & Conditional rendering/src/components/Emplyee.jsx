import React, { useState } from "react";

let employees =[{id:101,ename:"Sayan"},{id:102,ename:"Mona"},{id:103,ename:"Tushar"}]

export default function Employee(){

    const[emps,setEmps]=useState(["Sayan","Mona","Tushar"]);
    const[emps2,setEmps2] = useState(employees);

    return(
        <>
        <section className="container-fluid mt-2">
            <div className="row">
                <div className="col-5">
                    <div className="card">
                        <div className="card-body">
                            {
                                emps.map((ename,i)=><h1 key={i}>{ename}</h1>)
                            }

                            {
                                emps2.map((emp)=>{
                                    return <h1 key={emp.id}>{emp.ename}</h1>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}