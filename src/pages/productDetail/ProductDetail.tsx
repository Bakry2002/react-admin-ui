import Single from '../../components/single/Single';
import { singleProduct } from '../../data';
import './productDetail.scss'

const  ProductDetail = () => {
    return (
        <div>
            <Single {...singleProduct}/>
        </div>
    );
}

export default ProductDetail;