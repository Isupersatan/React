import './Products.css';
import iqooImage from'./assets/Iqoo.jpg';
function Products() {
    return (<>
        <section className="container-fluid mt-3">
            <div className="row">

                {/* img using assets */}
                <div className="col-3">
                    <div className="card" >
                        <img className="card-img-top" src={iqooImage} alt="" />
                        <div className="card-body">
                            <h3 className="card-title">IQoo 12</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eum cum odio. </p>
                            <button className="btn btn-warning">Buy now</button>
                        </div>
                    </div>
                </div>

                {/* img using public */}
                <div className="col-3">
                    <div className="card" >
                        <img className="card-img-top" src="images/iphone.jpg" alt="" />
                        <div className="card-body">
                            <h3 className="card-title">IPhone</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eum cum odio </p>
                            <button className="btn btn-warning">Buy now</button>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="card" >
                        <img className="card-img-top" src="https://i.insider.com/67d9a4afb8b41a9673fafb46?width=1200&format=jpeg" alt="" />
                        <div className="card-body">
                            <h3 className="card-title">Google Pixel</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eum cum odio </p>
                            <button className="btn btn-warning">Buy now</button>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="card" >
                        <img className="card-img-top" src={require("./assets/N3A.jpg")} alt="" />
                        <div className="card-body">
                            <h3 className="card-title">Nothing Phone 3a</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eum cum odio </p>
                            <button className="btn btn-warning">Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}
export default Products;