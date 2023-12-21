import React from 'react'
import ItemRecipe from './ItemRecipe'
import "../styles/central-panel.css"

function FoundRecipes({isClicked}) {
  return (
    <div className="found-recipes-container">
        {isClicked && (
        <>
          <ItemRecipe item={1} />
          <ItemRecipe item={2} />
        </>
      )}
    </div>
  )
}

export default FoundRecipes