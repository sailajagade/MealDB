import React from "react";
import "./displayMealsComponent.css";

function displayIngredients(props) {
  const { mealInfo } = props;

  const url = "https://www.themealdb.com/images/ingredients/";

  return (
    <div class="row">
      <h2 className="textAlign">Ingredients</h2>
      {Object.keys(mealInfo).map((indice, index) => (
        <div class="col-md-3 col-lg-3">
          {mealInfo["strMeasure" + index] &&
          mealInfo["strIngredient" + index] ? (
            <table>
              <tr>
                <td>
                  <img
                    src={url + mealInfo["strIngredient" + index] + ".png"}
                    width="150"
                    height="130"
                  />
                  {mealInfo["strMeasure" + index]}{" "}
                  {mealInfo["strIngredient" + index]}
                </td>
              </tr>
            </table>
          ) : 
           null
          }
        </div>
      ))}
    </div>
  );
}

export default displayIngredients;
