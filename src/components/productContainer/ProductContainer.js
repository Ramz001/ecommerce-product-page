import ProductImageBox from "../productImageBox/ProductImageBox"
import ProductHero from "../productHero/ProductHero"

function ProductContainer(){
    return (
        <main className="flex flex-col lg:flex-row mt-0 lg:mt-4 md:mt-8 mx-0 md:mx-20 md:py-6 items-center lg:items-start">
            <ProductImageBox />
            <ProductHero />
        </main>
    )
}

export default ProductContainer
