import { Fragment } from "react";
import Products from "./Components/Products";
function app(){
    return (
        <Fragment>
        <nav className="navbar bg-dark navbar-dark">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">🛒Amazon</a>
            </div>
        </nav>
        <Products></Products>
        </Fragment>
    );
}

export default app;