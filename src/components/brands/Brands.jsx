import { brands } from "../../data/brands";
import "./brands.css";

const Brands = () => {
    return ( 
    <div className="brands-wrapper">
         {brands.map(brand => 
            <div  className="brand">
                <img src={brand.image} key={brand.id} alt="" className="brand-image" />
            </div>
            )}
    </div> );
}
 
export default Brands;