import closeLogo from '../../images/icon-close.svg'
import nextLogo from '../../images/icon-next.svg'
import previousLogo from '../../images/icon-previous.svg'
import ProductImageGrid from '../productImageGrid/ProductImageGrid';

function ProductImageBoxZoom(props){
    const { handleZoomPicture, handleClick, currentProductImage, 
            imgCarouselNext, imgCarouselPrevious } = props
    
    return(
        <article>
            <div className="absolute w-screen h-screen left-[0] right-0 flex items-center justify-center 
            top-0 bg-black-low-opacity">
                <div className="flex flex-col relative">
                    <img 
                        src={closeLogo} 
                        alt="close logo"
                        className='absolute -top-8 right-0 cursor-pointer hover:opacity-60'
                        onClick={handleZoomPicture}
                    />
                    <div className='bg-white px-5 p-4 rounded-full absolute -left-6 bottom-[54%]
                    hover:opacity-75 transition duration-300 ease-out cursor-pointer'
                    onClick={imgCarouselPrevious}>
                        <img
                            src={previousLogo}
                            alt="previous logo"
                        />
                    </div>
                    <div className='bg-white px-5 p-4 rounded-full absolute -right-6 bottom-[54%]
                    hover:opacity-75 transition duration-300 ease-out cursor-pointer'
                    onClick={imgCarouselNext}
                    >
                        <img
                            src={nextLogo}
                            alt="next logo"
                        />
                    </div>
                    <img 
                        src={require(`../../images/image-product-${currentProductImage}.jpg`)} 
                        alt='product chosen'
                        className='object-cover w-[30rem] h-[30rem] rounded-2xl'
                    />
                    <ProductImageGrid 
                        handleClick={handleClick} 
                        currentProductImage={currentProductImage}
                    />
                </div>
            </div>
        </article>
    )
}

export default ProductImageBoxZoom;
