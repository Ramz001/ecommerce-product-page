import ProductDescription from "../productDescription/ProductDescription";
import ProductAddToCart from "../productAddToCart/ProductAddToCart"

function ProductHero(){
    return(
        <article className="lg:ml-28 mt-8 lg:mt-4 mx-6 md:mx-0">
            <ProductDescription />
            <div className="mt-6 2xl:mt-10 flex  items-center">
                <span className="text-3xl 2xl:text-4xl font-bold text-very-dark-blue">$125.00</span>
                <div className="text-orange bg-pale-orange rounded-md ml-8 py-1 px-2 font-bold">50%</div>
            </div>
            <div className="line-through text-light-grayish-blue font-bold 2xl:mt-4 mt-2 text-lg">
                $250.00
            </div>
            <ProductAddToCart />
        </article> 
    )
}

export default ProductHero;
