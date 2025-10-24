import { Link } from "react-router-dom";




export default function Navbar() {


    return (
        <>
            <nav className=" navbar  bg-nav ">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand">🛒 Amazon</Link>
                    <ul className="navbar-nav d-flex flex-row ms-auto">
                        <li className="nav-item mx-2">
                            <Link to="/contact" className="nav-link">
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="/signup" className="nav-link">
                                SignUp
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    );
}