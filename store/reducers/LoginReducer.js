import { LOGIN_SUCCESS } from "../actions/ActionConstants";
const initialState = {
    loggedInUser : null,
 
}

export default function LoginReducer(state = initialState, action) {

    if (action.type === LOGIN_SUCCESS) {
        console.log(action.payload);
        return ({
            ...state,
            loggedInUser: action.payload,
           
        })
    }
    
    else {
        return state;
    }
}


