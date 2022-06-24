import { BASE_URL } from "../store/actions/ActionConstants";
import axios from "axios";

export function customerLogin(payload)
{
    return axios.post(BASE_URL+"/customer/login", payload)
}

export function customerSignUp(payload)
{
    return axios.post(BASE_URL+"/user/save", payload)
}