import { useState } from 'react';
import ProductImageBoxZoom from '../productImageBoxZoom/ProductImageBoxZoom'
import ProductImageGrid from '../productImageGrid/ProductImageGrid';

function ProductImageBox(){
    const [currentProductImage,setCurrentProductImage] = useState(1)
    const [zoomPicture,setZoomPicture] = useState(false)

    // functions for the product image box
    function handleZoomPicture(){
        setZoomPicture(!zoomPicture)
    }

    function handleClick(number){
        setCurrentProductImage(number)
    }

   function imgCarouselNext(){
        (currentProductImage < 4) 
            ? setCurrentProductImage(currentProductImage + 1) 
            : setCurrentProductImage(1)
   }

   function imgCarouselPrevious(){
        (currentProductImage > 1)
            ? setCurrentProductImage(currentProductImage - 1)
            : setCurrentProductImage(4)
   }


    console.log(zoomPicture) 
    return(
        <div className="flex flex-col">
            <img 
                src={require(`../../images/image-product-${currentProductImage}.jpg`)} 
                alt='product chosen'
                className='object-cover rounded-2xl h-[22rem] w-[22rem] cursor-pointer'
                onClick={handleZoomPicture}
            />
            <ProductImageGrid 
                handleClick={handleClick} 
                currentProductImage={currentProductImage}
                />
            
            {zoomPicture && 
            <ProductImageBoxZoom 
                handleClick={handleClick} 
                currentProductImage={currentProductImage} 
                handleZoomPicture={handleZoomPicture}
                imgCarouselNext={imgCarouselNext}
                imgCarouselPrevious={imgCarouselPrevious}
            />}   
        </div>
    )
}

export default ProductImageBox;
