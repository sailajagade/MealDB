import React from "react";
import "./displayMealsComponent.css";

function displayMealsComponent(props) {
  const { mealInfo, showIngredient } = props;
  return (
    <div class="container">
      <div class="InstructionsMargin">
        {showIngredient ? (
          <div>
            <h2>{mealInfo.strMeal}</h2>
          </div>
        ) : (
          ""
        )}
        <div className="card">
          <img
            src={mealInfo.strMealThumb}
            onClick={(e) => props.onMealSelect(mealInfo)}
            alt=""
            width="350"
            height="350"
          />
          <div>
            <h5>{mealInfo.strMeal}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default displayMealsComponent;
