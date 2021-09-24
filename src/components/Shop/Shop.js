import React, { useEffect, useState } from "react";
import Cart from "../../Cart/Cart";
import Product from "../../Product/Product";
import "./Shop.css";

const Shop = () => {
   // get initial product
   const [products, setProducts] = useState([]);
   const [cart, setCart] = useState([]);

   // load initial product from api
   useEffect(() => {
      fetch("./products.JSON")
         .then((res) => res.json())
         .then((data) => setProducts(data));
   }, []);

   const handleAddToCart = (product) => {
      const newCart = [...cart, product];
      setCart(newCart);
   };

   return (
      <div className="shop_container">
         {/* product container  */}
         <div className="product_container">
            {products.map((product) => (
               <Product
                  key={product.key}
                  product={product}
                  addCart={handleAddToCart}
               ></Product>
            ))}
         </div>

         {/* cart container  */}
         <div className="cart_container">
            <Cart cart={cart}></Cart>
         </div>
      </div>
   );
};

export default Shop;
