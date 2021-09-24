import React, { useEffect, useState } from "react";
import Cart from "../../Cart/Cart";
import Product from "../../Product/Product";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
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

   useEffect(() => {
      if (products.length) {
         // get application tab data
         const storedDBData = getStoredCart();
         // declare empty array to push find data
         const newStoredDB = [];
         // loop through an object to get every key and value
         for (const key in storedDBData) {
            // console.log(key, storedDBData[key]);
            // stored match product
            const findProduct = products.find((product) => product.key === key);
            if (findProduct) {
               // add property to object
               findProduct.quantity = storedDBData[key];
               // send find data to empty array
               newStoredDB.push(findProduct);
            }
         }
         // send converted app tab data to UI
         setCart(newStoredDB);
      }
   }, [products]); //set dependence to call certain times

   // add new product
   const handleAddToCart = (product) => {
      const newCart = [...cart, product];
      setCart(newCart);

      // save to localStorage
      addToDb(product.key);
   };

   // search functionality
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
