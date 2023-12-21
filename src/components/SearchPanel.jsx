import React from 'react'
import "../styles/search-panel.css"
import InputIngredients from './InputIngredients';
import TimeInput from './TimeInput';

function SearchPanel() {
  return (
    <div className='serch-panel-container'>
        <div className='input-container'>
            <div className='search-panel-text'>Желаемые ингредиенты</div>
            <InputIngredients></InputIngredients>
        </div>
        <div className='input-container'>
            <div className='search-panel-text'>Исключить ингредиенты</div>
            <InputIngredients></InputIngredients>
        </div>
        <div className='input-container'>
            <div className='search-panel-text'>Время готовки</div>
            <TimeInput></TimeInput>
        </div>
    </div>
  )
}

export default SearchPanel;