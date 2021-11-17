import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";

const Routes = ({
  Allproducts,
  cartItems,
  Addproduct,
  handleRemove,
  handleCartClearance,
}) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Products Allproducts={Allproducts} Addproduct={Addproduct} />
        </Route>
        <Route path="/cart" exact>
          <Cart
            cartItems={cartItems}
            Addproduct={Addproduct}
            handleRemove={handleRemove}
            handleCartClearance={handleCartClearance}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
