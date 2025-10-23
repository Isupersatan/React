import ProductCard from './ProductCard';
import './Products.css';
import iqooImage from'../assets/Iqoo.jpg';
import iPhone from '../assets/iphone.jpg';
import nothing from '../assets/N3A.jpg';
import pixel from '../assets/pixel.png';

function Products() {
    return (<>
        <section className="container-fluid mt-3">
            <div className="row">

                {/* img using assets */}
               <ProductCard name="IQoo 12" imgUrl={iqooImage}/>

                {/* img using public */}
                <ProductCard name="I Phone" imgUrl={iPhone}/>

                <ProductCard name="Google Pixel" imgUrl={pixel}/>

                <ProductCard name="Nothing Phone 3a" imgUrl={nothing}/>
            </div>
        </section>
    </>);
}
export default Products;