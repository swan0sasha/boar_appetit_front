import React from 'react'
import ItemRecipe from './ItemRecipe'
import "../styles/central-panel.css"

function FoundRecipes({foundRecipesData}) {
  return (
    <div className="found-recipes-container">
        {foundRecipesData.map((recipeData, index) => (
            <ItemRecipe recipeData={recipeData} key={index} />
      ))}
    </div>
  )
}

export default FoundRecipes