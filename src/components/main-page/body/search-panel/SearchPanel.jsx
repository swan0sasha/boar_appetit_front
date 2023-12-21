import React from 'react'
import "../../../../styles/main-page/search-panel.css"
import InputIngredients from './InputIngredients';
import TimeInput from './TimeInput';
import Checkbox from './Checkbox';

function SearchPanel({onSearch}) {
    const handleButtonClick = () => {
        onSearch(true);
    };
    return (
        <div className='search-panel-container'>
            <div className='input-container'>
                <div className="search-panel-text-container">
                    <p className='search-panel-text'>Желаемые ингредиенты</p>
                </div>
                <InputIngredients></InputIngredients>
            </div>
            <div className='input-container'>
                <div className="search-panel-text-container">
                    <p className='search-panel-text'>Исключить ингредиенты</p>
                </div>
                <InputIngredients></InputIngredients>
            </div>
            <div className='input-container'>
                <div className="search-panel-text-container">
                    <p className='search-panel-text'>Время готовки</p>
                </div>
                <TimeInput></TimeInput>
            </div>
            <div className='search-button-container'>
                <button className='search-button' onClick={handleButtonClick}>Найти рецепты</button>
                <div className='container-text-checkbox'>
                    <p className='checkbox-text'>Учитывать избранное</p>
                    <Checkbox></Checkbox>
                </div>
            </div>
        </div>
    )
}

export default SearchPanel;