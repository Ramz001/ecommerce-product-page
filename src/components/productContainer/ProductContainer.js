import ProductImageBox from "../productImageBox/ProductImageBox"
import ProductHero from "../productHero/ProductHero"

function ProductContainer(){
    return (
        <main className="flex mt-8 px-20 py-6">
            <ProductImageBox />
            <ProductHero />
        </main>
    )
}

export default ProductContainer
