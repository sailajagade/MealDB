import React, { Component } from "react";
import axios from "axios";
import DisplayMealsComponent from "../Components/displayMealsComponent";
import DisplayIngredients from "../Components/displayIngredients";

import "../../src/Components/displayMealsComponent.css";

class displayMealsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomMealData: [],
      showIngredient: false,
    };
  }

  componentDidMount = async () => {
    try {
      const url = "https://www.themealdb.com/api/json/v1/1/random.php";
      const { data } = await axios.get(url);
      this.setState({ randomMealData: data });
    } catch (err) {
      console.log("error", err);
    }
  };

  onMealSearch = async (event) => {
    this.setState({ showIngredient: false });
    try {
      const url =
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + event;
      const { data } = await axios.get(url);
      this.setState({ randomMealData: data });
    } catch (err) {
      console.log("error", err);
    }
  };

  onSearchEnter = (event) => {
    if (event.keyCode === 13) {
      this.onMealSearch(event.target.value);
    }
  };

  onMealSelect = (event) => {
    const selectedMeal = {
      meals: [event],
    };
    this.setState({ showIngredient: true, randomMealData: selectedMeal });
  };

  render() {
    const { randomMealData, showIngredient } = this.state;
    return (
      <div>
        <div class="container">
          <div class="row searchMargin">
            <div class=" col-lg-5 marginTop">
              <b>TheMealDB</b>
            </div>
            <div class=" col-lg-6 align">
              {" "}
              <input
                id="inputbox"
                placeholder=" Search Meals"
                onKeyUp={(event) => this.onSearchEnter(event)}
              />
            </div>
          </div>
          {!showIngredient ? (
            <div class="row">
              <h3 class="textAlign IngredientsMargin">
                <b>Click on the image for Ingredients and Recepie</b>
              </h3>
            </div>
          ) : (
            ""
          )}

          {randomMealData &&
            randomMealData.meals &&
            randomMealData.meals.map((mealInfo, index) => (
              <div>
                <div class="col-md-4 col-lg-4">
                  <DisplayMealsComponent
                    mealInfo={mealInfo}
                    onMealSearch={this.onMealSearch}
                    onMealSelect={this.onMealSelect}
                    showIngredient={showIngredient}
                  />
                </div>

                {showIngredient ? (
                  <div>
                    <div class="col-md-7 col-lg-7">
                      <DisplayIngredients
                        mealInfo={mealInfo}
                        onMealSearch={this.onMealSearch}
                        onMealSelect={this.onMealSelect}
                      />
                    </div>
                    <div class="textAlign">
                      <h2>Instructions</h2>
                    </div>
                    {mealInfo.strInstructions}
                    <h4 class="textAlign searchMargin">
                      <b>Visit: </b>

                      <a href={mealInfo.strYoutube}> {mealInfo.strYoutube}</a>
                    </h4>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default displayMealsContainer;
