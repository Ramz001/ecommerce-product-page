import { useState } from 'react';
import ProductImageBoxZoom from '../productImageBoxZoom/ProductImageBoxZoom'
import ProductImageGrid from '../productImageGrid/ProductImageGrid';

function ProductImageBox(){
    const [currentProductImage,setCurrentProductImage] = useState(1)
    const [zoomPicture,setZoomPicture] = useState(false)

    function handleZoomPicture(){
        setZoomPicture(!zoomPicture)
    }

    function handleClick(e){
        setCurrentProductImage(e)
    }

   function imgCarouselNext(){
       if(currentProductImage < 4){
            setCurrentProductImage(currentProductImage + 1)
         }
        else{
            setCurrentProductImage(1)
        }
   }

   function imgCarouselPrevious(){
        if(currentProductImage > 1){
            setCurrentProductImage(currentProductImage - 1)
        }
        else{
            setCurrentProductImage(4)
        }
   }


    console.log(zoomPicture) 
    return(
        <div className="flex flex-col">
            <img 
            src={require(`../../images/image-product-${currentProductImage}.jpg`)} 
            alt='product chosen'
            className='object-cover w-[22rem] h-[22rem] rounded-2xl'
            onClick={handleZoomPicture}
            />
            <ProductImageGrid 
                handleClick={handleClick} 
                currentProductImage={currentProductImage}
                gridWidth={'w-[22rem]'}
                />
            
            {zoomPicture && <ProductImageBoxZoom 
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
