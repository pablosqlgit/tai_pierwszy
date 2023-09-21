import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Meal = (props) => {

  const { meal } = props

  return (
    <div>
      {meal.strMeal}
    </div>
  )
}

export default function Product() {

  const [meal, setMeal] = useState()
  const { productId } = useParams()

  useEffect(() => {
    console.log(productId)
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productId}`)
    .then(res => res.json())
    .then(res => setMeal({...res.meals[0]}))
    .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    console.log(meal)
  }, [meal])

  return (
    <div>
      {
        !!meal ? <Meal meal={meal} /> : 'Loading...'
      }
    </div>
  )
}