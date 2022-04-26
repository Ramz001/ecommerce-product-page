import { connect } from 'react-redux'
import productThumbnail from '../../images/image-product-1-thumbnail.jpg'
import ProductTitle from '../productTitle/ProductTitle'
import iconDelete from '../../images/icon-delete.svg'
import '../../index.css'

function PopUpCart({ popUpCart, amount, price, addToCart, removedFromCart}) {
    price = price.toFixed(2)
    return(
        popUpCart && <div className="flex flex-col absolute bg-white
        shadow-2xl right-0 -bottom-[11rem] w-[22rem] font-bold">
            <div className="flex p-4 items-center border-b border-light-grayish-blue">
                Cart
            </div>  
            { !addToCart &&
            <div className="p-4 flex items-center justify-center text-sm 
            text-very-dark-blue h-32 w-[22rem]">
                Your cart is empty.
            </div>
            }  
            {
                amount > 0 && addToCart &&
                <div className='h-32 w-[22rem] p-4'>
                    <div className='flex gap-4 items-center'>
                        <img src={productThumbnail} alt="product thumbnail" className='h-10 w-10' />
                        <div className='flex flex-col text-dark-grayish-blue capitalize'>
                            <ProductTitle />
                            <span>${price} * {amount}
                                <span className='font-bold text-very-dark-blue ml-3'>
                                    ${(price * amount).toFixed(2)}
                                </span>
                            </span>
                        </div>
                            <img 
                                src={iconDelete} 
                                alt='delete icon'
                                className='w-6 h-6 cursor-pointer'
                                onClick={()=> removedFromCart()}
                            />
                    </div>
                <button className='w-full h-10 mt-2 orange-btn'>
                    Checkout
                </button>
                </div>
            }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addedToCart: () => dispatch({type: 'ADD_TO_CART'}),
        removedFromCart: () => dispatch({type: 'REMOVE_FROM_CART'})
    }
}

const mapStateToProps = (state) => {
    return {
        addToCart: state.mainReducer.addToCart,
        amount: state.mainReducer.amount,
        price: state.mainReducer.price
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PopUpCart)