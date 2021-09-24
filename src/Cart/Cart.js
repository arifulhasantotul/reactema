import React from "react";
import "./Cart.css";

const Cart = (props) => {
   const { cart } = props;
   return (
      <div className="Cart">
         <h3>Order summary</h3>
         <hr />
         <p>Total Items: {cart.length}</p>
         <p>Products price: $</p>
         <p>Shipping cost: $</p>
         <p>Tax amount: $</p>

         <h4>Grand total: $</h4>
      </div>
   );
};

export default Cart;
