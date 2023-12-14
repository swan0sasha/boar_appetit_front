import React from 'react'
import TopAccountInfo from '../TopAccountInfo'
import '../../styles/top.css'

function RecipeTop() {
    return (
        <div className="top-recipe-container">
            <a href={"/"}>
                <button className="go-back-button">Вернуться к списку рецептов</button>
            </a>
            <TopAccountInfo></TopAccountInfo>
        </div>
    )
}

export default RecipeTop