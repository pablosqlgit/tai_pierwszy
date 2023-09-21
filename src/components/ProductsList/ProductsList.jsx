import { React, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
        <Link to={`/product/${product.idMeal}`}>See product</Link>
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