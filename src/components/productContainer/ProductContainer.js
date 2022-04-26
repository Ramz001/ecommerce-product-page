import ProductImageBox from "../productImageBox/ProductImageBox"
import ProductDescription from "../productDescription/ProductDescription"

function ProductContainer(){
    return (
        <main className="flex mt-8 px-20 py-6">
            <ProductImageBox />
            <ProductDescription />
        </main>
    )
}

export default ProductContainer


