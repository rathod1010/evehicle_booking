import { VEHICLE_FETCH_ALL } from './ActionConstants';
import { VEHICLE_FETCHBYID } from './ActionConstants';
import { fetchAllVehicles } from '../../Services/VehicleServices';
import { fetchVehicleById } from '../../Services/VehicleServices';


export function getAllVehicles() {
    return (dispatch) => {
        return fetchAllVehicles().then(
            resp => {
                dispatch(getAllVehiclesSuccess(resp.data))
            }
        )
    }
}


export function getAllVehiclesSuccess(data)
{
    return(
        {
            type: VEHICLE_FETCH_ALL,
            payload: data
        }

    )
}



export function FetchVehicleById(vehicleId) {

 
    return (dispatch) => {
        return fetchVehicleById(vehicleId).then(
            resp =>
             {
                dispatch( fetchVehicleByIdSuccess(resp.data))
                    
                
            }

        )
    }
}

export function fetchVehicleByIdSuccess(data)
{
    return(
        {
            type: VEHICLE_FETCHBYID,
            payload: data
        }

    )
}