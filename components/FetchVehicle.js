import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from 'react';
import { FetchVehicleById } from '../store/actions/VehicleActions'
import img5 from "../images/vespa.jpg"
import img2 from "../images/revolt.jpg"
import img3 from "../images/revolt_b.jpeg"
import img4 from "../images/oben.jpg"
import img1 from "../images/ola.jpg"
import img6 from "../images/revolt2.jpg"
import img7 from "../images/moto.jpg"
import img8 from "../images/bolt.jpg"
import { useParams } from 'react-router-dom'
import { addToCart } from "../store/actions/CartActions";
import { NumberValidator } from "../lib/validation";


function FetchVehicle() {
    const [qty, setQty] = useState("")
    const vehicle = useSelector(state => state.VehicleReducer.vehicle);

    const dispatch = useDispatch();

    const { id } = useParams();
    const myUser = localStorage.getItem("myUser");

    const myFunction = async () => {
        dispatch(FetchVehicleById(id))
    };
    useEffect(() => {
        myFunction();
    });

    const handleSubmit = () => {
        console.log("1234", myUser)
        if (JSON.parse(myUser).userId) {
            let payload =
            {
                userId: JSON.parse(myUser).userId,
                vehicleId: vehicle.vehicleId,
                quantity: qty
            }
            console.log("payload", payload)
            dispatch(addToCart(payload));
            alert("added to cart successfully");
            
          
        } else {
            window.location.href = "/customer/login"
        }

    }
    let ImgArry = [img1, img2, img3,img4,img5,img6,img7,img8]
    return (

        <div>
            <h2 style={{ fontWeight: "bold", color: "Highlight" }} className="heder_style border-bottom py-3">Vehicle Details</h2>

         
            {
                vehicle !== null &&
                <div className="row pt-4">
                    <div className="col" >
                        <img src={ImgArry[id - 1]} alt="not found" style={{ width: "100%", height: "300px", objectFit: "contain" }} />
                    </div>
                    <div className="col">

                        {/* <p style={{fontWeight:"bold"}}> Vehicle Id : {vehicle.vehicleId}</p> */}
                        <p style={{fontWeight:"bold"}}> Vehicle Name : {vehicle.vehicleName}</p>
                        <p style={{fontWeight:"bold"}}> Vehicle Model : {vehicle.vehicleModel}</p>
                        <p style={{fontWeight:"bold"}}> Vehicle Color : {vehicle.vehicleColor}</p>
                        <p style={{fontWeight:"bold"}}> Vehicle Price : INR {vehicle.vehiclePrice}</p>

                        <div className="d-flex">
                            <div className="form-group">
                                <label style={{fontWeight:"bold"}}>
                                    quantity</label>
                                <input type="text" name="quantity" className="form-control" value={qty} onChange={e => setQty(e.target.value)} style={{ width: "100px" }} onKeyPress={NumberValidator} />
                            </div>
                            <button type="button"
                                class="btn btn-success" onClick={handleSubmit} disabled={qty?.length > 0 && qty !== "0"? false : true}>
                                <span class="glyphicon 
                    glyphicon-shopping-cart" >
                                </span>
                                <b style={{ color: "ButtonFace" }} > Add to Cart </b>
                            </button>
                        </div>

                    </div>

                </div>
            }
            <div>
                
            </div>
        </div>
    )
}


export default FetchVehicle;