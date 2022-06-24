import { PLACE_ORDER } from "../actions/ActionConstants";
import { FETCH_ORDER } from "../actions/ActionConstants";
const initialState={
    order:null,
    userorder:null
   
}

export default function OrderReducer(state=initialState,action)
{
    
    if(action.type===FETCH_ORDER)
    {
        return(
            {
                ...state,
                userorder:action.payload
            }
        )
    }
   
    if(action.type===PLACE_ORDER)
    {
        
        return ({
          
            ...state,
            order : action.payload
        })
    }

    else {
        return state;
    }
}

