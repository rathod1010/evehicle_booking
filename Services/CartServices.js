import { BASE_URL } from "../store/actions/ActionConstants";
import axios from "axios";


export function addInToCart(payload)
{
return axios.put(BASE_URL+"/cart/addItem", payload)
}

export function fetchTheCart(cartId)
{
    return axios.get(BASE_URL+"/user/cart/"+ cartId)
}