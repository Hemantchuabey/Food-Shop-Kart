import React, { useContext } from "react";
import { shopContext } from "../../Context/ShopContext";
import { Foods } from "../../Food";
import CartItem from "./CartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(shopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
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
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal : ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your cart Empty</h1>
      )}
    </div>
  );
};

export default Cart;
