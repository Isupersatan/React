import './Products.css';


export default function ProductCard(props){
    return (
        <>
         <div className="col-3">
                    <div className="card" >
                        <img className="card-img-top" src={props.imgUrl} alt="" />
                        <div className="card-body">
                            <h3 className="card-title">{props.name}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eum cum odio. </p>
                            <button className="btn btn-warning">Buy now</button>
                        </div>
                    </div>
                </div>
        </>
    );
}