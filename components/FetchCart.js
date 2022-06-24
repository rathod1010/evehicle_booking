import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from 'react';
import { fetchCart } from "../store/actions/CartActions";
import { checkOutOrder } from "../store/actions/OrderActions";
import {  useParams } from 'react-router-dom'
import EmptyCart from "../images/empty-cart.png"
function FetchCart() {

  // const vehicle = useSelector(state => state.VehicleReducer.vehicle);
  const usercart = useSelector(state => state.CartReducer.usercart);;

  


  const dispatch = useDispatch();

  const { id } = useParams();

  const myFunction = async () => {
    dispatch(fetchCart(id))
  };
  useEffect(() => {
    myFunction();
  });
  const handleClick = () => {
    let payload = {
      amount: usercart.cartTotal
    }
    dispatch(checkOutOrder(id, payload))
    setTimeout(() => {
      window.location.href ="/success"
    },500)
  }
  return (

    usercart ?
      <div>
      
        <h2 style={{ fontWeight: "bold", color: "Highlight" }} className="heder_style border-bottom py-3">Cart Details</h2>

      
        <h3 className="text-center pt-3"> Your cart has {usercart.count} items</h3 >
      
        {usercart?.count ?
          <React.Fragment>
            <div className="table_content pt-3">
              <table border="1" style={{ padding: "20px 20px 20px 20px" }}>
                <tr style={{ padding: "20px" }}>
                  <th>vehicle id</th>
                  <th>quantity</th>
                  <th>item total</th>
                </tr>
                {usercart.cartItems.map((p) =>
                  <tr>
                    <td>{p.vehicleId}</td>
                    <td>{p.quantity}</td>
                    <td>{p.itemTotal}</td>
                  </tr>
                )
                }
              </table>
              <h3 className="pt-3">Total Price : {usercart.cartTotal}</h3>
            </div>
            <br></br>
            <div className="d-flex justify-content-center">
            
              <button className="button_css" onClick={handleClick}>Continue & Place Order</button>
            
            </div>
          </React.Fragment>
          :
          <div className="empty_cart">
            <img
              src={EmptyCart}
              alt={"empty cart"}
              width="" />
          </div>
        }


      </div >
      : ""

  )
}


export default FetchCart;