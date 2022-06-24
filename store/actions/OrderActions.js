import { fetchTheOrder, placeOrder } from '../../Services/OrderServices';

import { PLACE_ORDER } from './ActionConstants';
import { FETCH_ORDER } from './ActionConstants';
export function fetchOrder(cartId) {
    return (dispatch) => {
        return fetchTheOrder(cartId).then(
            resp => {

                dispatch(fetchOrderSuccess(resp.data)

                )
            }
        )
    }
}

export function fetchOrderSuccess(data) {
    return (
        {
            type: FETCH_ORDER,
            payload: data
        }
    )
}

export function checkOutOrder(id, payload) {
    return (dispatch) => {
        return placeOrder(id, payload).then(
            resp => {

                dispatch(
                    checkOutOrderSuccess(resp.data)

                )
            }
        )
    }
}

export function checkOutOrderSuccess(data) {
    return (

        {
            type: PLACE_ORDER,
            payload: data
        }
    )

}
