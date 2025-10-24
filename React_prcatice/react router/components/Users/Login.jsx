import { Link } from "react-router-dom";

export default function Login() {

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
                                        <input type="text" className="form-control" placeholder="Enter Username" />
                                    </div>

                                    <div className="mb-2">
                                        <input type="text" className="form-control" placeholder="Enter Password" />
                                    </div>
                                    <input type="submit" className="btn btn-dark" value="Login" />
                                    <div>don't have any account ?
                                        <span>
                                            <Link to="/signup">Click Here</Link>
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