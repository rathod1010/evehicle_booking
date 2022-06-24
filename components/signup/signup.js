import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { doCustomerSignup } from "../../store/actions/LoginActions"
import { emailValidator,passwordValidator,NumberValidator} from '../../lib/validation';

function Login() {


    const [validation, setValidation] = useState(false)
    const[validationEmail,setValidationEmail]=useState("");
    const[validationPassword,setValidationPassword]=useState("");

    const [state, setState] = useState({
        firstname: '',
        email: '',
        phonenumber: '',
        pincode: '',
        city: '',
        username: '',
        password: ''
    });
    const dispatch = useDispatch();


    const doLogin = () => {
        const payload = {
            userName: state.userName,
            email: state.email,
            mobile: state.phonenumber,
            pincode: state.pincode,
            city: state.city,
            username: state.username,
            password: state.password
        }
        dispatch(doCustomerSignup(payload))

    }
    const handleSignUpdata = (e) => {

        if (e.target.name === "email") {
            let ValidateEmail = emailValidator(e.target.value)
            setValidationEmail(ValidateEmail)

        }
        if (e.target.name === "password") {
            let ValidatePassword = passwordValidator(e.target.value)
            setValidationPassword(ValidatePassword)
            console.log("ValidateEmail", ValidatePassword)
        }
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
        checkIfvalidate()

    }
    const checkIfvalidate = () => {
        let valid = false;
        valid = state.userName &&
            state.email &&
            state.phonenumber &&
            state.city &&
            state.password &&
            state.username &&
            state.pincode ? true : false
        setValidation(valid)

    }
    return (
        <div className="container " style={{ display: "flex", justifyContent: "center", height: "80vh", alignItems: "center" }}>


            <div className='main_divv'>

                <div className="form-group">
                    <label htmlFor='username'>Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="userName"

                        onChange={e => handleSignUpdata(e)}
                        placeholder="Enter Your Name"
                    />

                </div>

                <div className="form-group">
                    <label htmlFor='username'>Email  </label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"

                        onChange={e => handleSignUpdata(e)}
                        placeholder="Enter Email"
                    />
                       {validationEmail ? "" :   <div style={{ color: "red",fontSize:"12px" }}>Enter Valid Email</div>}

                </div>

                <div className="form-group">
                    <label htmlFor='username'>Phone Number  </label>
                    <input
                        type="number"
                        className="form-control"
                        name="phonenumber"

                        onChange={e => handleSignUpdata(e)}
                        placeholder="Enter Phone Number"
                        onKeyPress={NumberValidator} 

                    />

                </div>
                <div className="form-group">
                    <label htmlFor='username'>City  </label>
                    <input
                        type="text"
                        className="form-control"
                        name="city"

                        onChange={e => handleSignUpdata(e)}
                        placeholder="Enter your City"

                    />

                </div>
                <div className="form-group">
                    <label htmlFor='username'>Post Code  </label>
                    <input
                        type="number"
                        className="form-control"
                        name="pincode"

                        onChange={e => handleSignUpdata(e)}
                        placeholder="Enter Post Code"
                        onKeyPress={NumberValidator} 

                    />

                </div>

                <div className="form-group">
                    <label htmlFor='username'>User Name </label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"

                        onChange={e => handleSignUpdata(e)}
                        placeholder="Enter Last Name"

                    />

                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"

                        onChange={e => handleSignUpdata(e)}
                        placeholder="Enter Password"

                    />
                     {validationPassword ? "" : <div style={{color :"red",fontSize:"12px"}}>Password must have  uppercase,  lowercase,  digit,  special character  ,length should be minimum 8 character</div>}
                </div>

                <div>
                    <button onClick={doLogin} className="btn btn-primary" disabled={!validation}>SignUp</button>
                </div>

          </div>

              

     </div>


        
        
    )
}

export default Login;