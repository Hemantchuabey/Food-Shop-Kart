import React, { useContext } from "react";
import { shopContext } from "../../Context/ShopContext";

const Food = (props) => {
  const { id, foodName, price, foodImage } = props.data;
  const { addToCart, cartItems } = useContext(shopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="food">
      <img src={foodImage} alt="foodImage" />
      <div className="description">
        <p>
          <b>{foodName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBtn" onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Food;
