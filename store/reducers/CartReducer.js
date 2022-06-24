import { ADD_TO_CART } from "../actions/ActionConstants"
import { FETCH_CART } from "../actions/ActionConstants"

const initialState={
    cart:null,
    carts:[],
    usercart:null,
   
}

export default function CartReducer(state=initialState,action)
{
    if(action.type === ADD_TO_CART)
    {
        return ({
            ...state,
            cart : action.payload
        })
    }
   
    if(action.type=== FETCH_CART)
    {
        console.log(action.payload)
        return ({
          
            ...state,
            usercart : action.payload
        })
    }
  
    else {
        return state;
    }
}

