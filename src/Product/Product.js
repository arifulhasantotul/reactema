import React from "react";
import "./Product.css";

const Product = (props) => {
   console.log(props);
   const { name, price, category, seller, star, img } = props.product;
   return (
      <div className="product">
         <img src={img} alt="" />
         <div className="product_details">
            <h3>{name}</h3>
            <p>
               <small>by: {seller}</small>
            </p>
            <p>Price: ${price}</p>
            <p>Rating: {star}</p>
            <p>Category: {category}</p>
         </div>
      </div>
   );
};

export default Product;
