import { useEffect, React, useState, useReducer } from 'react'
import './Home.css'
import CategoriesList from '../CategoriesList/CategoriesList'
import ProductsList from '../ProductsList/ProductsList'

const initialState = {
  categories: [],
  products: [],
}

function reducer(prev = initialState, action){
  switch(action.type){
    case 'setCategories':
      return {
        ...prev,
        categories: action.payload
      }
      break
    case 'setProducts':
      return {
        ...prev,
        products: action.payload
      }
      break
  }
}

export default function Home() {

  const [state, dispatch] = useReducer(reducer, initialState)
  const [category, setCategory] = useState('Beef')

  const controller = new AbortController()
  const signal = controller.signal

  const getProducts = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`, { signal })
    .then(res => res.json())
    .then(res => dispatch({
      type: 'setProducts',
      payload: res.meals
    }))
    .catch(err => console.log(err))
  }

  // useEffect(() => {
  //   console.log(state)
  // }, [state])

  useEffect(() => {
    console.log(controller)
    getProducts()
  }, [category])

  useEffect(() => {
    document.title = 'Strona główna'
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(res => dispatch({ type: 'setCategories', payload: res.categories }))
  }, [])

  return (
    <main className='home-page-wrapper'>
      <div className='recipes-header-wrapper'>
        <div className='searchbar-wrapper'>
          <label>
            <input type='text' className='search-bar' placeholder='Search Recipes'></input>
          </label>
        </div>
        <div className='recipes-header'>
          <h1>Explore recipes</h1>
        </div>
      </div>
      <div className='recipes-wrapper'>
        <CategoriesList categories={state.categories} category={category} setCategory={setCategory} />
        <ProductsList products={state.products} />
      </div>
    </main>
  )
}