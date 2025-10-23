import { Fragment } from "react";
import Counter from "./components/Counter";


function app() {
    return (
        <Fragment>
            <nav className="navbar bg-dark navbar-dark">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">🛒Amazon</a>
                </div>
            </nav>
            <Counter />
        </Fragment>
    );
}

export default app;