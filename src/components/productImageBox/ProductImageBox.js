import { useState } from "react";
import ProductImageBoxZoom from "../productImageBoxZoom/ProductImageBoxZoom";
import ProductImageGrid from "../productImageGrid/ProductImageGrid";
import PreviousBtn from "../previousBtn/PreviousBtn";
import NextBtn from "../nextBtn/NextBtn";
import "../../index.css";

function ProductImageBox() {
  const [currentProductImage, setCurrentProductImage] = useState(1);
  const [zoomPicture, setZoomPicture] = useState(false);

  // functions for the product image box
  function handleZoomPicture() {
    setZoomPicture(!zoomPicture);
  }

  function handleClick(number) {
    setCurrentProductImage(number);
  }

  function imgCarouselNext() {
    currentProductImage < 4
      ? setCurrentProductImage(currentProductImage + 1)
      : setCurrentProductImage(1);
  }

  function imgCarouselPrevious() {
    currentProductImage > 1
      ? setCurrentProductImage(currentProductImage - 1)
      : setCurrentProductImage(4);
  }
  return (
    <div className="flex flex-col">
      <div className="relative">
        <img
          src={require(`../../images/image-product-${currentProductImage}.jpg`)}
          alt="product chosen"
          className="object-cover md:rounded-2xl image-box-responsive-width cursor-pointer"
          onClick={handleZoomPicture}
        />
        <div className="block md:hidden">
          <PreviousBtn
            imgCarouselPrevious={imgCarouselPrevious}
            PreviousBtnStyles={"left-2"}
          />
          <NextBtn
            imgCarouselNext={imgCarouselNext}
            NextBtnStyles={"right-2"}
          />
        </div>
      </div>

      <ProductImageGrid
        handleClick={handleClick}
        currentProductImage={currentProductImage}
      />

      {zoomPicture && (
        <ProductImageBoxZoom
          handleClick={handleClick}
          currentProductImage={currentProductImage}
          handleZoomPicture={handleZoomPicture}
          imgCarouselNext={imgCarouselNext}
          imgCarouselPrevious={imgCarouselPrevious}
        />
      )}
    </div>
  );
}

export default ProductImageBox;
