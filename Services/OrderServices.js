import { BASE_URL } from "../store/actions/ActionConstants";
import axios from "axios";

export function  fetchTheOrder(cartId)
{
    return axios.get(BASE_URL+"/user/orders/"+cartId)
}

export function placeOrder(id,payload)
{
    return axios.post(BASE_URL+"/order/checkout/"+id,payload)
}