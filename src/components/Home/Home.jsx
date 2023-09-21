import { useEffect, React, useState, useReducer } from 'react'
import { useLocation, useParams } from 'react-router-dom'
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
  const { search } = useLocation()

  const [state, dispatch] = useReducer(reducer, initialState)

  const currentCategory = search.slice(3)

  const getProducts = (which) => {
    if(which === 'all'){
      state.categories.forEach(category => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`)
        .then(res => res.json())
        .then(res => {
          const productsArray = state.products
          res.meals.forEach(meal => {
            productsArray.push(meal)
          })
          dispatch({
            type: 'setProducts',
            payload: productsArray
          })
        })
        .catch(err => {
          console.log(err)
        })
      })
    }else{
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${currentCategory}`)
        .then(res => res.json())
        .then(res => {
          dispatch({
            type: 'setProducts',
            payload: res.meals
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  useEffect(() => {
    if(!!currentCategory){
      getProducts(currentCategory)
    }else{
      getProducts('all')
    }
  }, [state.categories])

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
        <CategoriesList categories={state.categories} currentCategory={currentCategory} />
        <ProductsList products={state.products} />
      </div>
    </main>
  )
}