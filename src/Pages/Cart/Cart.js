import React, { useContext } from "react";
import { shopContext } from "../../Context/ShopContext";
import { Foods } from "../../Food";
import CartItem from "./CartItem";
import "./cart.css";

const Cart = () => {
  const { cartItems } = useContext(shopContext);
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {Foods.map((food) => {
          if (cartItems[food.id] !== 0) {
            return <CartItem data={food} />;
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
