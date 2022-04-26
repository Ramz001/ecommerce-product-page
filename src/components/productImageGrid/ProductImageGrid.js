function ProductImageGrid({ currentProductImage,handleClick, gridWidth }){
    
    const smallImgStyle = (n) => `w-full rounded-md hover:opacity-50 transition duration-500 ease-out 
    cursor-pointer ${currentProductImage === n ? ' opacity-25' : ''}`
    const smallImgContainerStyle = (n) => `${currentProductImage === n ? 'border-2 border-orange' : ''} rounded-lg `
    
    return (
        <div className='grid grid-cols-4 gap-4 mt-4 h-16 w-[22rem] mx-auto'>
                <div className={smallImgContainerStyle(1)}>
                    <img 
                        src={require('../../images/image-product-1-thumbnail.jpg')} 
                        alt='product 1' 
                        onClick={() => handleClick(1)}
                        className={smallImgStyle(1)}
                    />
                </div>
                <div className={smallImgContainerStyle(2)}>
                    <img 
                        src={require('../../images/image-product-2-thumbnail.jpg')} 
                        alt='product 2'
                        onClick={() => handleClick(2)}
                        className={smallImgStyle(2)}
                    />
                </div>
                <div className={smallImgContainerStyle(3)}>
                <img 
                    src={require('../../images/image-product-3-thumbnail.jpg')} 
                    alt='product 3'
                    onClick={() => handleClick(3)}
                    className={smallImgStyle(3)}
                />
                </div>
                <div className={smallImgContainerStyle(4)}>
                    <img 
                        src={require('../../images/image-product-4-thumbnail.jpg')} 
                        alt='product 4'
                        onClick={() => handleClick(4)}
                        className={smallImgStyle(4)}
                    />
                </div>
            </div> 
    )
}

export default ProductImageGrid;