import React from 'react'
import "../styles/central-panel.css"
import SearchPanel from './SearchPanel';

function CentralPanel() {
  return (
    <div className='central-panel-container'>
        <div className='search-recipes-text'>Поиск рецептов</div>
        <SearchPanel></SearchPanel>
    </div>
  )
}

export default CentralPanel;