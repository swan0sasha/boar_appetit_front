import React from 'react'
import "../styles/search-panel.css"
import InputIngredients from './InputIngredients';
import TimeInput from './TimeInput';
import Checkbox from './Checkbox';

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
        <div className='search-button-container'>
            <button className='search-button'>Найти рецепты</button>
            <div className='container-text-checkbox'>
              <div className='checkbox-text'>Учитывать избранное</div>
              <Checkbox></Checkbox>
            </div>
        </div>
    </div>
  )
}

export default SearchPanel;