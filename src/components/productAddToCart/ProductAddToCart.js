import iconPlus from '../../images/icon-plus.svg';
import iconMinus from '../../images/icon-minus.svg'
import { connect } from 'react-redux';
import '../../index.css'

function ProductAddToCart({increment,decrement,amount,addToCart}){
    return (
        <div className="flex gap-8 items-center mt-4">
            <div className='flex items-center bg-pale-orange gap-8 h-14 rounded-md px-4'>
                <img 
                    src={iconMinus} 
                    alt='minus icon'
                    className='px-4 py-1 cursor-pointer'
                    onClick={()=> decrement()}
                />
                <div className='text-very-dark-blue font-bold'>
                    {amount}
                </div>
                <img 
                    src={iconPlus} 
                    alt="plus icon"
                    className='px-4 py-1 cursor-pointer'
                    onClick={()=> increment()}
                />
            </div>
            <button 
            className='flex gap-4 w-48 h-14 items-center justify-center font-bold orange-btn'
            onClick={()=> addToCart()}
            >
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fill-rule="nonzero"/></svg>
                Add to cart
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state.mainReducer.addToCart);
    return {
        amount: state.mainReducer.amount,
        addToCart: state.mainReducer.addToCart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({type: 'INCREMENT'}),
        decrement: () => dispatch({type: 'DECREMENT'}),
        addToCart: () => dispatch({type: 'ADD_TO_CART'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductAddToCart);
