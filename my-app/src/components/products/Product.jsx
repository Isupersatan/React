import { Link } from "react-router-dom"


export default function Product({ item }) {
    let { image, title, rating, price ,id} = item
    return (
        <>
            <div className="col-3 mb-3" >
                <Link to={`/product/${id}`}>
                    <div className="card h-100">
                        <div className="card-header text-center">
                            <img
                                src={image}
                                alt={title}
                                style={{ width: "100%", height: "200px" }}
                            />
                        </div>
                        <div className="card-body text-center">
                            <h6>{title}</h6>
                            <h5>💲{price}</h5>
                            <h3>⭐{rating.rate}</h3>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}
