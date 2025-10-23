import React, { useState } from "react";

export default function RegForm() {
    let[user,setUser]=useState({
        email:"",
        usn:"",
        pswd:"",
        job:"",
        desc:"",
        terms:false
    });

    function updateInput(e){
            setUser((u)=>{
                return{...u,};
            })
    }

    return (
        <>
            <section className="container-fluid mt-3">
                <div className="row">
                    <div className="col-5 m-auto">
                        <div className="card">
                            <div className="card-header text-center bg-dark text-white">
                                <h1>Register Form</h1>
                            </div>
                            <div className="card-body">
                                <form action="">
                                    <div className="mb-2">
                                        <input type="text" placeholder="Enter Email" className="form-control" />
                                    </div>

                                    <div className="mb-2">
                                        <input type="text" placeholder="Enter Username" className="form-control" />
                                    </div>

                                    <div className="mb-2">
                                        <input type="text" placeholder="Enter Password" className="form-control" />
                                    </div>

                                    <div className="mb-2">
                                        <select className="form-select" id="">
                                            <option selected>Select Jobs</option>
                                            <option value="developer">Developer</option>
                                            <option value="tester">Tester</option>
                                            <option value="devops">Devops</option>
                                        </select>
                                    </div>

                                    <div className=" input-group mb-2">
                                        <span className="input-group-text">Job Descrition</span>
                                        <textarea name="" id="" className="form-control"></textarea>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="terms" />
                                        <label for="terms">Accept Terms & Condition</label>
                                    </div>

                                    <input type="submit" className="btn btn-dark mt-2" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}