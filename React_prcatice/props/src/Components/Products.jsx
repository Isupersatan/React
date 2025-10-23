import ProductCard from './ProductCard';
import './Products.css';
import iqooImage from'../assets/Iqoo.jpg';
import iPhone from '../assets/iphone.jpg';
import nothing from '../assets/N3A.jpg';
import pixel from '../assets/pixel.png';

let item1 = {id:101, name:"IQoo 12",imgUrl:iqooImage };
let item2 = {id:102, name:"I Phone",imgUrl:iPhone };
let item3 = {id:103, name:"Google Pixel",imgUrl:pixel };
let item4 = {id:104, name:"Nothing Phone 3a",imgUrl:nothing };

function Products() {
    return (<>
        <section className="container-fluid mt-3">
            <div className="row">

                {/* img using assets */}
               <ProductCard obj={item1}/>

                {/* img using public */}
                <ProductCard obj={item2}/>

                <ProductCard obj={item3}/>

                <ProductCard obj={item4}/>
            </div>
        </section>
    </>);
}
export default Products;