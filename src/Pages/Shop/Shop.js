import React from "react";
import { Foods } from "../../Food";
import Food from "./Food";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>FoodShopKart</h1>
      </div>
      <div className="products">
        {Foods.map((food) => (
          <Food data={food} />
        ))}
      </div>
    </div>
  );
};
