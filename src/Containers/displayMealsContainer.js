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
    console.log(event);
    this.setState({ showIngredient: true, randomMealData: selectedMeal });
  };

  render() {
    const { randomMealData, showIngredient } = this.state;
    return (
      <div>
        <div class="textAlign mealAlign">
          <h2 class="margin">
            <b>TheMealDB</b>
          </h2>
        </div>
        <div class="container">
          <div class="align">
            {" "}
            <input
              id="inputbox"
              placeholder=" Search Meals"
              onKeyUp={(event) => this.onSearchEnter(event)}
            />
          </div>
          {randomMealData &&
            randomMealData.meals &&
            randomMealData.meals.map((mealInfo, index) => (
              <div>
                <div class="row col-md-12 col-lg-12">
                  <div class="col-md-5 col-lg-5">
                    <DisplayMealsComponent
                      mealInfo={mealInfo}
                      onMealSearch={this.onMealSearch}
                      onMealSelect={this.onMealSelect}
                      showIngredient={showIngredient}
                    />
                  </div>

                  <div class="col-md-7 col-lg-7">
                    {showIngredient ? (
                      <DisplayIngredients
                        mealInfo={mealInfo}
                        onMealSearch={this.onMealSearch}
                        onMealSelect={this.onMealSelect}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                {showIngredient ? (
                  <div class="container  ">
                    <h2 class="textAlign InstructionsMargin ">Instructions</h2>
                    {mealInfo.strInstructions}
                    <h4 class="textAlign InstructionsMargin ">
                      <b>Visit: </b>

                      {mealInfo.strYoutube}
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
