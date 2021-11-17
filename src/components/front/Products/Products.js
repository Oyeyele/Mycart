import React from "react";
import "./Products.css";

const Products = ({ Allproducts, Addproduct }) => {
  return (
    <div className="products">
      {Allproducts.map((Item, id) => (
        <div className="One" key={id}>
          <img className="product-image" src={Item.img} alt={Item.name} />
          <div>
            <h3 className="product-name">{Item.name}</h3>
          </div>
          <div className="product-price">{Item.price}</div>
          <div>
            <button className="product-button" onClick={() => Addproduct(Item)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
