import React from "react";
import "./displayMealsComponent.css";

function displayIngredients(props) {
  const { mealInfo } = props;
  const incrementIndex = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];
  const url = "https://www.themealdb.com/images/ingredients/";

  return (
    <div class="row IngredientsMargin">
      <h2 className="textAlign">Ingredients</h2>
      {incrementIndex.map((indice, index) => (
        <div class=" col-md-3 col-lg-3">
          <table>
            {mealInfo["strMeasure" + indice] &&
            mealInfo["strIngredient" + indice] ? (
              <tr>
                <td>
                  <img
                    src={url + mealInfo["strIngredient" + indice] + ".png"}
                    width="150"
                    height="150"
                  />
                  {mealInfo["strMeasure" + indice]}{" "}
                  {mealInfo["strIngredient" + indice]}
                </td>
              </tr>
            ) : (
              ""
            )}
          </table>
        </div>
      ))}
    </div>
  );
}

export default displayIngredients;
