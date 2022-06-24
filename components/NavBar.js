import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/evhicle.png';

function NavBar() {
    const myUser = localStorage.getItem("myUser");
    const userId = JSON.parse(myUser).userId
    const userName = JSON.parse(myUser).userName
    const handlelogout = () => {
        localStorage.setItem("myUser",JSON.stringify({}));
        alert("Logout Successful");
        window.location.href="/"
    }
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
            <Link className="navbar-brand" to="/vehicle/all"><img src={img1} alt="" style={{ width: "35px", height: "35px" }}></img></Link>
            <ul className="nav navbar-nav ml-auto">
                <li class="nav-item pr-3">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
               
                <li class="nav-item pr-3">
                    <Link className="nav-link" to={`/user/order/${userId}`}>MyOrders</Link>
                </li>
                {userId ? <li class="nav-item pr-3">
                    <Link className="nav-link" to="#">
                        {userName}
                    </Link>
                </li> :
                    <li class="nav-item pr-3">
                        <Link className="nav-link" to="/customer/login">SignIn</Link>
                    </li>}
                {userId ? <li class="nav-item pr-3" onClick={handlelogout}>
                    <Link className="nav-link" to="#">
                        {
                            "logOut"
                        }
                    </Link>
                </li> :
                    ""}
                <li class="nav-item pr-3">
                   
                    <button style={{ fontSize: "20px" }} className="button_style">  <Link to={`/user/cart/${userId}`}> Cart <i class="fa fa-shopping-cart"></i></Link></button>
                   
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;