import { ADD_TO_CART } from './ActionConstants';
import { FETCH_CART } from './ActionConstants';
import { addInToCart } from '../../Services/CartServices';
import { fetchTheCart } from '../../Services/CartServices';

export function addToCart(payload) {
    console.log("payload", payload)
    return (dispatch) => {
        return addInToCart(payload).then(
            resp => {

                dispatch(addToCartSuccess(resp.data))
                   
            }
        )
    }
}

export function addToCartSuccess(data)
{
    return(

        {
            type: ADD_TO_CART,
            payload: data
        }
    )

  
}

export function fetchCart(cartId) {
    return (dispatch) => {
        return fetchTheCart(cartId).then(
            resp => {
                console.log(resp)
                console.log("welcome")
                dispatch(
                    fetchCartSuccess(resp.data)
                   
                )
            }
        )
    }
}

export function fetchCartSuccess(data)
{
    return(

        {
            type: FETCH_CART,
            payload: data
        }
    )

  
}