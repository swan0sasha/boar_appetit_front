import React, {useState} from 'react'
import "../../../styles/main-page/central-panel.css"
import SearchPanel from './search-panel/SearchPanel';
import FoundRecipes from './search-results/FoundRecipes';

function CentralPanel() {
    const [isClicked, setIsClicked] = useState(false);
    const handleSearch = (isChecked) => {
        setIsClicked(isChecked);
    };
    return (
        <div className='central-panel-container'>
            <p className='search-recipes-text'>Поиск рецептов</p>
            <SearchPanel onSearch={handleSearch}></SearchPanel>
            <FoundRecipes isClicked={isClicked}></FoundRecipes>
        </div>
    )
}

export default CentralPanel;