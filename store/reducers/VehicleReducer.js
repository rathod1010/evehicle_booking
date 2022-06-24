import { VEHICLE_FETCH_ALL,VEHICLE_FETCHBYID } from "../actions/ActionConstants"

const initialState = {
    vehicles: [],
    vehicle : null
   
}

export default function VehicleReducer(state = initialState, action) {

    if (action.type === VEHICLE_FETCH_ALL) {
        
        return ({
            ...state,
            vehicles: action.payload
        })
    }

    else if(action.type=== VEHICLE_FETCHBYID)
    {
        return(
            {
                ...state,
                vehicle :action.payload
            }
        )
    }
    

    else {
        return state;
    }
}

