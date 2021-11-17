import React, { useState } from "react";
import data from "./components/back/Data/data";
import Header from "./components/front/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/front/Routes/Routes";

const App = () => {
  const { Allproducts } = data;
  const [cartItems, setCartItems] = useState([]);

  const Addproduct = (good) => {
    const productExist = cartItems.find((item) => item.id === good.id);

    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === good.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...good, quantity: 1 }]);
    }
  };

  const handleRemove = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCartClearance = () => {
    setCartItems([]);
  };
  return (
    <div>
      <Router>
        <Header />
        <Routes
          Allproducts={Allproducts}
          cartItems={cartItems}
          Addproduct={Addproduct}
          handleRemove={handleRemove}
          handleCartClearance={handleCartClearance}
        />
      </Router>
    </div>
  );
};

export default App;
