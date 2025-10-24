import { Link } from "react-router-dom";

export default function SignUp() {

    return (
        <>
            <section className="container-fluid bg-body vh-100 text-white">
                <div className="row">
                    <div className="col-5 m-auto mt-5">
                        <div className="card bg-nav text-center text-white">
                            <div className="card-header">
                                <h1>Login</h1>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-2">
                                        <input type="text" placeholder="Enter Email" className="form-control" />
                                    </div>

                                    <div className="mb-2">
                                        <input type="text" placeholder="Enter Username" className="form-control" />
                                    </div>

                                    <div className="mb-2">
                                        <input type="text" placeholder="Enter Password" className="form-control" />
                                    </div>

                                    <div>
                                        <input type="checkbox" id="terms" />
                                        <label for="terms">Accept Terms & Condition</label>
                                    </div>

                                    <input type="submit" className="btn btn-dark mt-2" />
                                    <div>already have an account ?
                                        <span>
                                            <Link to="/login">Click Here</Link>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}