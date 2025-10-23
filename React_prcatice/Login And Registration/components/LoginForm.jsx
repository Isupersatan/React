import React, { useState } from "react";

export default function LoginForm(){
    let [user,setUser]=useState({usn:"",pswd:""});

    function updateUsn(e){
        setUser((u)=>{
            return {...u,usn: e.target.value};
        });
    }

    function updatePswd(e){
        setUser((u)=>{
            return {...u,pswd: e.target.value};
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(user);
        setUser({usn:"",pswd:""});
    }

    return(
        <>
        <section className="container-fluid mt-3">
            <span>{JSON.stringify(user)}</span>
            <div className="row">
                <div className="col-5 m-auto">
                    <div className="card">
                        <div className="card-header bg-dark text-white text-center">
                            <h1>Login Form</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Enter Username" value={user.usn} onChange={updateUsn}/>
                                </div>

                                <div className="mb-2">
                                    <input type="text" className="form-control"  placeholder="Enter Password" value={user.pswd} onChange={updatePswd}/>
                                </div>
                                <input type="submit" className="btn btn-dark" value="Login" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}