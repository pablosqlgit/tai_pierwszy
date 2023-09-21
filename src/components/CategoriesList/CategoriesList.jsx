import { useEffect, React } from 'react'
import { useLocation, redirect, useNavigate } from 'react-router-dom'
import './CategoriesList.css'

export default function CategoriesList(props) {
    const navigation = useNavigate()

    const { currentCategory, categories } = props

    const handleNavigate = (category) => {
        if(category === currentCategory){
            navigation(`/`)
        }else{
            navigation(`?q=${category}`)
        }
        window.location.reload()
    }

    const categoriesList = categories.map((category, key) => (
        <span key={key} className='category' style={{ outline: currentCategory === category.strCategory && '2px solid black' }} onClick={() => handleNavigate(category.strCategory)}>
            <p>{category.strCategory}</p>
        </span>
    ))

    return (
        <div className='category-list-wrapper'>
            {
                categoriesList
            }
        </div>
    )
}