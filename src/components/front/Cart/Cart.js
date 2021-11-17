import React from "react";
import "./Cart.css";

const Cart = ({ cartItems, Addproduct, handleRemove, handleCartClearance }) => {
  return (
    <div className="content">
      <div className="header">Cart Items</div>
      <div className="clear-cart">
        {cartItems.length >= 1 && (
          <button className="clear-cart" onClick={handleCartClearance}>
            Clear Cart
          </button>
        )}
      </div>
      {cartItems.length === 0 && <div>Your cart is empty!</div>}
      <div>
        {cartItems.map((item, id) => (
          <div key={id} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-images" />
            <div className="itemName">{item.name}</div>
            <div className="AddorRemove">
              <button className="Add" onClick={() => Addproduct(item)}>
                +
              </button>
              <button className="Subtract" onClick={() => handleRemove(item)}>
                -
              </button>
            </div>
            <div className="item-price">
              {item.quantity} * {item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
