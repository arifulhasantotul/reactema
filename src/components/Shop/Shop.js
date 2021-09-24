import React, { useEffect, useState } from "react";
import Product from "../../Product/Product";
import "./Shop.css";

const Shop = () => {
   // get initial product
   const [products, setProducts] = useState([]);

   // load initial product from api
   useEffect(() => {
      fetch("./products.JSON")
         .then((res) => res.json())
         .then((data) => setProducts(data));
   }, []);

   return (
      <div className="shop_container">
         {/* product container  */}
         <div className="product_container">
            {products.map((product) => (
               <Product key={product.key} product={product}></Product>
            ))}
         </div>

         {/* cart container  */}
         <div className="cart_container">
            <h3>This is cart bro</h3>
         </div>
      </div>
   );
};

export default Shop;
