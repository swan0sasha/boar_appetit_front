import React from 'react'
import ItemRecipe from './ItemRecipe'
import "../styles/central-panel.css"

function FoundRecipes() {
  return (
    <div className="found-recipes-container">
        <ItemRecipe item={1}></ItemRecipe>
        <ItemRecipe item={2}></ItemRecipe>
    </div>
  )
}

export default FoundRecipes