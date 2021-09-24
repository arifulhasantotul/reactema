import React, { useEffect, useState } from "react";
import Cart from "../../Cart/Cart";
import Product from "../../Product/Product";
import { addToDb } from "../../utilities/fakedb";
import "./Shop.css";

const Shop = () => {
   // get initial product
   const [products, setProducts] = useState([]);
   const [cart, setCart] = useState([]);
   const [uiProducts, setUIProducts] = useState([]);

   // load initial product from api
   useEffect(() => {
      fetch("./products.JSON")
         .then((res) => res.json())
         .then((data) => {
            setProducts(data);
            setUIProducts(data);
         });
   }, []);

   const handleAddToCart = (product) => {
      const newCart = [...cart, product];
      setCart(newCart);

      // save to localStorage
      addToDb(product.key);
   };

   const handleSearch = (event) => {
      const searchText = event.target.value;
      const searchProducts = products.filter((product) =>
         product.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setUIProducts(searchProducts);
   };

   return (
      <>
         {/* search container  */}
         <div className="search_container">
            <input
               onChange={handleSearch}
               type="text"
               placeholder="Search here ..."
            />
         </div>
         {/* shop container  */}
         <div className="shop_container">
            {/* product container  */}
            <div className="product_container">
               {uiProducts.map((product) => (
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
      </>
   );
};

export default Shop;
