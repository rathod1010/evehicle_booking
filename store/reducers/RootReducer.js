import { combineReducers } from "redux";


import VehicleReducer from "./VehicleReducer"
import CartReducer from "./CartReducer";
import LoginReducer from "./LoginReducer";
import SignUpReducer from "./signupReducer";
import OrderReducer from "./OrderReducer";

const rootReducer = combineReducers({
   VehicleReducer, CartReducer, LoginReducer, SignUpReducer,OrderReducer
})

export default rootReducer;