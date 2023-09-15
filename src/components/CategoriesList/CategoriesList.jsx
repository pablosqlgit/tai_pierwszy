import { useEffect, React } from 'react'
import './CategoriesList.css'

export default function CategoriesList(props) {

    const { categories, setCategory } = props

    const categoriesList = categories.map((category, key) => (
        <span key={key} className='category' style={{ outline: props.category === category.strCategory && '2px solid black' }} onClick={() => setCategory(category.strCategory)}>
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