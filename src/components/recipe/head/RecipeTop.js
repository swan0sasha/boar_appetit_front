import React from 'react'
import TopAccountInfo from '../../TopAccountInfo'
import '../../../styles/recipe/recipe-page-top.css'

function RecipeTop() {
    return (
        <div className="top-recipe-container">
            <a href={"/"} >
                <button className="go-back-button">Вернуться к списку рецептов</button>
            </a>
            <TopAccountInfo/>
        </div>
    )
}

export default RecipeTop