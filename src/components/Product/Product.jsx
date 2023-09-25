import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Meal = (props) => {
  const { meal } = props;

  const showIngredients = () => {
    const measuredIngredients = [];
    let x = 1;
    while (meal[`strIngredient${x}`]) {
      measuredIngredients.push(
        `${meal[`strIngredient${x}`]} - ${meal[`strMeasure${x++}`]}`,
      );
    }
    const showedIngredients = measuredIngredients.map((ingredient) => (
      <li>{ingredient}</li>
    ));
    return <ul>{showedIngredients}</ul>;
  };
  console.log(meal);

  return (
    <>
      <div id="product-container">
        <h1>{meal.strMeal}</h1>
        <div id="recipe-wrapper">
          <div id="ingredients-wrapper">
            <span>Ingredients:</span>
            {showIngredients()}
          </div>
          <div>
            <img src={meal.strMealThumb} />
          </div>
        </div>
        <div id="product-socials-wrapper">{meal.strInstructions}</div>
      </div>
    </>
  );
};

export default function Product() {
  const [meal, setMeal] = useState();
  const { productId } = useParams();

  useEffect(() => {
    console.log(productId);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productId}`)
      .then((res) => res.json())
      .then((res) => setMeal({ ...res.meals[0] }))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(meal);
  }, [meal]);

  return <div>{!!meal ? <Meal meal={meal} /> : "Loading..."}</div>;
}
