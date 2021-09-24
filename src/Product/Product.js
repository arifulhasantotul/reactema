import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import "./Product.css";

const Product = (props) => {
   // console.log(props);

   const { name, price, category, seller, star, img } = props.product;
   // console.log(props.product);
   const shoppingBag = <FontAwesomeIcon icon={faShoppingBag} />;

   return (
      <div className="product">
         <img src={img} alt="" />
         <div className="product_details">
            <h3>{name}</h3>
            <p>
               <small>by: {seller}</small>
            </p>
            <p>Price: ${price}</p>
            <Rating
               className="starStyle"
               initialRating={star}
               emptySymbol="far fa-star"
               fullSymbol="fas fa-star"
               readonly
            />

            <p>Category: {category}</p>
            <button onClick={() => props.addCart(props.product)}>
               {" "}
               {shoppingBag}
               <span>add to cart</span>
            </button>
         </div>
      </div>
   );
};

export default Product;
