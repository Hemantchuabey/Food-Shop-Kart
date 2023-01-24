import React, { useContext } from "react";
import { shopContext } from "../../Context/ShopContext";
import { Foods } from "../../Food";
import CartItem from "./CartItem";
import "./cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(shopContext);
  const totalAmount = getTotalCartAmount();
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
      <div className="checkout">
        <p>Subtotal : ${totalAmount}</p>
        <button>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
