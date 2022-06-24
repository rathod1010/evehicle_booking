import { SIGNUP_SUCCESS } from "../actions/ActionConstants";

const initialState = {
    SignupInUser : null
}


export default function SignUpReducer(state = initialState, action) {

    if (action.type === SIGNUP_SUCCESS) {
        console.log(action.payload);
        return ({
            ...state,
            SignupInUser: action.payload
        })
    }
    
    else {
        return state;
    }
}