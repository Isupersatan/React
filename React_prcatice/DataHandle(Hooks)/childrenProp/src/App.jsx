import { Fragment } from "react";
import Cart from "./components/Cart";


function app() {
    return (
        <Fragment>
            <nav className="navbar bg-dark navbar-dark">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">🛒Amazon</a>
                </div>
            </nav>
            <Cart></Cart>
        </Fragment>
    );
}

export default app;