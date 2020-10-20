import React from "react";
import "./displayMealsComponent.css";

function displayMealsComponent(props) {
  const { mealInfo } = props;
  return (
    <div>
      <h3><b>{mealInfo.strMeal}</b></h3>

      <img
        src={mealInfo.strMealThumb}
        onClick={(e) => props.onMealSelect(mealInfo)}
        alt=""
        width="350"
        height="350"
      />

      <h5>{mealInfo.strMeal}</h5>
    </div>
  );
}
export default displayMealsComponent;
