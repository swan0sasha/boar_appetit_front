import React from 'react'
import ItemRecipe from './ItemRecipe'
import "../../../../styles/main-page/central-panel.css"

function FoundRecipes({isClicked}) {
  return (
    <div className="found-recipes-container">
        {isClicked && (
        <>
          <ItemRecipe item={2} />
          <ItemRecipe item={1} />
        </>
      )}
    </div>
  )
}

export default FoundRecipes