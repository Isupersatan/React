import { Fragment } from "react";
import WishMsg from "./components/WishMsg";

function app(){
    return (
        <Fragment>
        <nav className="navbar bg-dark navbar-dark">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">🛒Amazon</a>
            </div>
        </nav>
        <WishMsg/>
        </Fragment>
    );
}

export default app;