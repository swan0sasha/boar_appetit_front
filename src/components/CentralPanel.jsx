import React, { useState } from 'react'
import "../styles/central-panel.css"
import SearchPanel from './SearchPanel';
import ItemRecipe from './ItemRecipe';
import FoundRecipes from './FoundRecipes';

function CentralPanel() {
  const [isClicked, setIsClicked] = useState(false);
  const handleSearch = (isChecked) => {
    setIsClicked(isChecked);
  };
  return (
    <div className='central-panel-container'>
        <div className='search-recipes-text'>Поиск рецептов</div>
        <SearchPanel onSearch={handleSearch}></SearchPanel>
        {/* <ItemRecipe></ItemRecipe> */}
        <FoundRecipes isClicked={isClicked}></FoundRecipes>
    </div>
  )
}

export default CentralPanel;