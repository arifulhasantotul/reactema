import React from "react";
import "./Cart.css";

const Cart = (props) => {
   const { cart } = props;

   let total = 0;
   let totalQuantity = 0;
   for (const product of cart) {
      product.quantity = !product.quantity ? 1 : product.quantity;
      total = total + product.price * product.quantity;
      totalQuantity = totalQuantity + product.quantity;
   }
   let delivery;
   delivery = total ? 15 : 0;
   const tax = (total + delivery) * 0.1;
   const grandTotal = total + delivery + tax;
   return (
      <div className="Cart">
         <h3>Order summary</h3>
         <hr />
         <p>Total Items: {totalQuantity}</p>
         <p>Products price: ${total.toFixed(2)}</p>
         <p>Shipping cost: ${delivery}</p>
         <p>Tax amount: ${tax.toFixed(2)}</p>

         <h4>Grand total: ${grandTotal.toFixed(2)}</h4>
      </div>
   );
};

export default Cart;
