import ProductDescription from "../productDescription/ProductDescription";
import ProductAddToCart from "../productAddToCart/ProductAddToCart"

function ProductHero(){
    return(
        <article className="ml-28 mt-4">
            <ProductDescription />
            <div className="mt-6 flex items-center">
                <span className="text-3xl font-bold ">$125.00</span>
                <div className="text-orange bg-pale-orange rounded-md ml-8 py-1 px-2 font-bold">50%</div>
            </div>
            <div className="line-through text-light-grayish-blue font-bold mt-2 text-lg">
                $250.00
            </div>
            <ProductAddToCart />
        </article> 
    )
}

export default ProductHero;
