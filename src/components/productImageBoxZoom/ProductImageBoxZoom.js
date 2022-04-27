import closeLogo from "../../images/icon-close.svg";
import ProductImageGrid from "../productImageGrid/ProductImageGrid";
import NextBtn from "../nextBtn/NextBtn";
import PreviousBtn from "../previousBtn/PreviousBtn";

function ProductImageBoxZoom(props) {
  const {
    handleZoomPicture,
    handleClick,
    currentProductImage,
    imgCarouselNext,
    imgCarouselPrevious,
  } = props;

  return (
    <article>
      <div
        className="hidden md:absolute w-screen h-screen left-[0] right-0 md:flex items-center justify-center 
            top-0 bg-black-low-opacity"
      >
        <div className="flex flex-col">
          <div className="relative">
            <img
              src={closeLogo}
              alt="close logo"
              className="absolute -top-[10%] md:-top-[5%]  2xl:-top-[10%] right-0 cursor-pointer hover:opacity-60 2xl:w-[2rem]"
              onClick={handleZoomPicture}
            />
            <PreviousBtn
              imgCarouselPrevious={imgCarouselPrevious}
              PreviousBtnStyles={"-left-5 bottom-[45%]"}
            />
            <NextBtn
              imgCarouselNext={imgCarouselNext}
              NextBtnStyles={"-right-5 bottom-[45%]"}
            />
            <img
              src={require(`../../images/image-product-${currentProductImage}.jpg`)}
              alt="product chosen"
              className="object-cover md:w-[30rem] md:h-[30rem] w-[20rem] h-[20rem] rounded-2xl 2xl:w-[40rem] 2xl:h-[40rem]"
            />
          </div>
          <ProductImageGrid
            handleClick={handleClick}
            currentProductImage={currentProductImage}
          />
        </div>
      </div>
    </article>
  );
}

export default ProductImageBoxZoom;
