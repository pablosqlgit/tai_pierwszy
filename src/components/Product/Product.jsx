import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";

const Meal = (props) => {
  const { meal } = props;
  useEffect(() => {
    document.title = meal.strMeal;
  }, []);

  const showIngredients = () => {
    const measuredIngredients = [];
    let x = 1;
    while (meal[`strIngredient${x}`]) {
      measuredIngredients.push(
        `${meal[`strIngredient${x}`]} - ${meal[`strMeasure${x++}`]}`,
      );
    }
    const showedIngredients = measuredIngredients.map((ingredient, key) => (
      <li id="ingredients-list-item" key={key}>
        {ingredient}
      </li>
    ));
    return <ul id="ingrefients-list">{showedIngredients}</ul>;
  };

  return (
    <>
      <div id="product-container">
        <div id="meal-name-wrapper">
          <h1 id="meal-name">{meal.strMeal}</h1>
        </div>

        <div id="recipe-wrapper">
          <div id="meal-ingredients-wrapper">
            <div id="meal-img-wrapper">
              <img src={meal.strMealThumb} id="meal-img" alt={meal.strMeal} />
            </div>

            <div id="ingredients-wrapper">
              <span id="ingredients-text">Ingredients: </span>
              {showIngredients()}
            </div>
          </div>

          <div id="instruction-wrapper">
            <span id="instruction-text">Instruction: </span>
            <div id="instruction-div">{meal.strInstructions}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Product() {
  const [meal, setMeal] = useState();
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productId}`)
      .then((res) => res.json())
      .then((res) => setMeal({ ...res.meals[0] }))
      .catch((err) => console.log(err));
  }, []);

  return <div>{!!meal ? <Meal meal={meal} /> : "Loading..."}</div>;
}
