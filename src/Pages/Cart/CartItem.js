import React, { useContext } from "react";
import { shopContext } from "../../Context/ShopContext";

const CartItem = (props) => {
  const { id, foodName, price, foodImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItem } =
    useContext(shopContext);
  return (
    <div className="cartItem">
      <img src={foodImage} />
      <div className="description">
        <p>
          <b>{foodName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItem(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
