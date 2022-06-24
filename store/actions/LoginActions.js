import { customerLogin, customerSignUp } from '../../Services/LoginServices';
import { LOGIN_SUCCESS } from './ActionConstants';
import { SIGNUP_SUCCESS } from './ActionConstants';

export function doCustomerLogin(payload) {
    return (dispatch) => {
        return customerLogin(payload).then(
            resp => {
                console.log(resp);
                localStorage.setItem("myUser", JSON.stringify(resp.data));
                dispatch(doLoginSuccess(resp.data));
                window.location.href = "/"
            }
        )
            .catch(error => {
                alert(error.response.data);
            })
    }
}
export function doCustomerSignup(payload) {
    return (dispatch) => {
        return customerSignUp(payload).then(
            resp => {
                console.log("responce", resp);
                 localStorage.setItem("myUser", JSON.stringify(resp.data));
                dispatch(doLoginSuccess(resp.data));
                 window.location.href = "/"
            }
        )
            .catch(error => {
                console.log(error);
            })
    }
}



export function doLoginSuccess(data) {

    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

export function doSignUpSuccess(data) {

    return {
        type: SIGNUP_SUCCESS,
        payload: data
    }
}