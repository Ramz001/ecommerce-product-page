

function PopUpCart({ popUpCart }){
    return(
        popUpCart && <div className="flex flex-col absolute bg-white
        shadow-2xl right-0 -bottom-[11rem] w-80 font-bold">
            <div className="flex p-4 items-center border-b border-light-grayish-blue">
                Cart
            </div>  
            <div className="p-4 flex items-center justify-center text-sm text-very-dark-blue h-32">
                Your cart is empty.
            </div>  
        </div>
    )
}

export default PopUpCart