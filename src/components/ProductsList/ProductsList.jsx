import { React, useEffect } from 'react'
import './ProductsList.css'

export default function ProductsList(props) {

  const { products } = props

  useEffect(() => {
    console.log(products)
  })


  const productsList = products.map((product, key) => (
    <div className='product' key={key}>
      <img src={product.strMealThumb} />
      <div>
        <p>{product.strMeal}</p>
      </div>
    </div>
  ))

  return (
    <div className='products-list-wrapper'>
      {
        productsList
      }
    </div>
  )
}