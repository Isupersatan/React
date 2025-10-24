import { Link } from "react-router-dom";

export default function Home() {

    return (
        <>
            <section className="bg-body text-white vh-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                    <div className="text-center">
                        <h1 className="fw-bold mb-3">Welcome to Amazon Clone</h1>
                        <p className="lead mb-4">Shop your favorite products at lightning speed.</p>
                        <div className="btn btn btn-outline-light px-4 py-2">
                            <Link to="/productList" className="nav-link">
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}