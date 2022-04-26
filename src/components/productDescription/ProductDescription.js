import ProductTitle from "../productTitle/ProductTitle";

function ProductDescription(){
    return (
        <>
        <p className="text-orange uppercase font-bold text-sm">sneaker company</p>
            <h2 className="text-5xl max-w-md font-bold mt-4 mb-8 text-very-dark-blue capitalize">
                <ProductTitle />
            </h2>
            <p className="max-w-sm text-sm text-dark-grayish-blue">
                These low profile sneakers are your perfect casual wear companion.
                Featuring a durable rubber outer sole, they'll withstand everything a weather can offer
            </p>
        </>
    )
}

export default ProductDescription;