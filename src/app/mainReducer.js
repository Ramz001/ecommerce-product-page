import { INCREMENT, DECREMENT, ADD_TO_CART, REMOVE_FROM_CART } from "./actions";
import { initialStore } from "./store";

export const mainReducer = (state = initialStore, action) => {
    if(action.type === ADD_TO_CART){
        return {
            ...state,
            addToCart: true
        }
    }
    if(action.type === REMOVE_FROM_CART){
        return {
            ...state,
            addToCart: false
        }
    }
    if(action.type === INCREMENT){
        return {
            ...state,
            amount: state.amount + 1
        }
    }
    if(action.type === DECREMENT){
        if(state.amount > 0){
            return {
                ...state,
                amount: state.amount - 1
            }
        }
        return {
            ...state,
        }
    }
    return state
}