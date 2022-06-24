import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVehicles } from '../store/actions/VehicleActions';
import img5 from "../images/vespa.jpg"
import img2 from "../images/revolt.jpg"
import img3 from "../images/revolt_b.jpeg"
import img4 from "../images/oben.jpg"
import img1 from "../images/ola.jpg"
import img6 from "../images/revolt2.jpg"
import img7 from "../images/moto.jpg"
import img8 from "../images/bolt.jpg"




function FetchAllVehicles() {

    const vehicles = useSelector(state => state.VehicleReducer.vehicles)
    const dispatch = useDispatch();

    const myFunction = async () => {
        dispatch(getAllVehicles())
    };

    useEffect(() => {
        myFunction();
    });
    let ImgArry = [img1, img2, img3, img4,img5,img6,img7,img8]
    console.log("vehicles", vehicles)
    return (
        <div>
            <h2 style={{ fontWeight: "bold", color: "darkslateblue" }} className="heder_style border-bottom py-3">E-Vehicle ShowRoom</h2>
            <div className='col-12 pt-4'>
                <div className="row">
                    {
                        vehicles.map((p, index) =>
                            <div key={index} className=" col-3  link_css pt-4">
                                <Link to={`/vehicle/get/${p.vehicleId}`}>
                                    <div className="card" style={{ width: "100%", height: "auto" }}>
                                        <img className="card-img-top" src={ImgArry[index]} alt="motor" height={181}/>
                                        <div className="card-body">
                                        <p className="card-text m-0 pt-1" style={{fontSize:"13px"}}> Model : {p.vehicleModel}</p>
                                        
                                            <h4 className="card-title m-0 pt-1">{p.vehicleName}</h4>
                                            <p className="card-text m-0 pt-1" style={{fontSize:"13px",color:"#999"}}> Color : {p.vehicleColor}</p>
                                          

                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default FetchAllVehicles;