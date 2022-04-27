import ProductTitle from "../productTitle/ProductTitle";

function ProductDescription() {
  return (
    <>
      <p className="text-orange uppercase font-bold text-sm">sneaker company</p>
      <h2 className="md:text-5xl text-3xl max-w-md font-bold mt-4 2xl:mt-8 2xl:mb-16 mb-8 text-very-dark-blue capitalize">
        <ProductTitle />
      </h2>
      <p className="max-w-sm text-sm text-dark-grayish-blue">
        These low profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything a
        weather can offer.
      </p>
    </>
  );
}

export default ProductDescription;
