import React, { useContext } from "react";
import { shopContext } from "../../Context/ShopContext";

const CartItem = (props) => {
  const { id, foodName, price, foodImage } = props.data;
  const { cartItems } = useContext(shopContext);
  return (
    <div className="cartItem">
      <img src={foodImage} />
      <div className="description">
        <p>
          <b>{foodName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button>-</button>
          <input value={cartItems[id]} />
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
