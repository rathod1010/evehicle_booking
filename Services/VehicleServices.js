import axios from "axios";
import { BASE_URL } from "../store/actions/ActionConstants";
export function fetchAllVehicles()
{
    return axios.get(BASE_URL+"/vehicle/all");
}
export function fetchVehicleById(vehicleId)
{
    return axios.get(BASE_URL+"/vehicle/find/"+vehicleId)
}