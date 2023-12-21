import React from 'react'
import "../styles/central-panel.css"
import SearchPanel from './SearchPanel';
import ItemRecipe from './ItemRecipe';
import FoundRecipes from './FoundRecipes';

function CentralPanel() {
  return (
    <div className='central-panel-container'>
        <div className='search-recipes-text'>Поиск рецептов</div>
        <SearchPanel></SearchPanel>
        {/* <ItemRecipe></ItemRecipe> */}
        <FoundRecipes></FoundRecipes>
    </div>
  )
}

export default CentralPanel;