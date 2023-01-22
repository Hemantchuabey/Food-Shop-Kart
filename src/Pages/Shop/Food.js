import React from "react";

const Food = (props) => {
  const { id, foodName, price, foodImage } = props.data;
  return (
    <div className="food">
      <img src={foodImage} alt="foodImage" />
      <div className="description">
        <p>
          <b>{foodName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBtn">Add to Cart</button>
    </div>
  );
};

export default Food;
