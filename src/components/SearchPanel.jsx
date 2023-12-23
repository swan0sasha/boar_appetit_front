import React, { useState } from 'react'
import "../styles/search-panel.css"
import InputIngredients from './InputIngredients';
import TimeInput from './TimeInput';
import Checkbox from './Checkbox';

function SearchPanel({ onSearch }) {
  const [searchData, setSearchData] = useState({
    allowedIngredients: [],
    forbiddenIngredients: [],
    allowedTags: [],
    timeAtMost: 0
  });
  const [desiredIngredients, setDesiredIngredients] = useState([]);
  const [excludedIngredients, setExcludedIngredients] = useState([]);
  const [cookingTime, setCookingTime] = useState({ hours: '', minutes: '' });
  const handleDesiredIngredientsChange = (ingredients) => {
    // console.log(ingredients)
    setDesiredIngredients(ingredients);
  };

  const handleExcludedIngredientsChange = (ingredients) => {
    setExcludedIngredients(ingredients);
  };

  const handleCookingTimeChange = (hours, minutes) => {
    // console.log(hours)
    setCookingTime({ hours, minutes });
  };

  const handleButtonClick = () => {
    const searchData = {
      allowedIngredients: desiredIngredients.map((ingredient) => ({ name: ingredient })),
      forbiddenIngredients: excludedIngredients.map((ingredient) => ({ name: ingredient })),
      allowedTags: [],
      timeAtMost: parseInt(cookingTime.hours) * 60 + parseInt(cookingTime.minutes)
    };
    onSearch(searchData);
  };
  return (
    <div className='serch-panel-container'>
        <div className='input-container'>
            <div className='search-panel-text'>Желаемые ингредиенты</div>
            <InputIngredients onChange={handleDesiredIngredientsChange}></InputIngredients>
        </div>
        <div className='input-container'>
            <div className='search-panel-text'>Исключить ингредиенты</div>
            <InputIngredients onChange={handleExcludedIngredientsChange}></InputIngredients>
        </div>
        <div className='input-container'>
            <div className='search-panel-text'>Время готовки</div>
            <TimeInput onChange={handleCookingTimeChange}></TimeInput>
        </div>
        <div className='search-button-container'>
            <button className='search-button' onClick={handleButtonClick}>Найти рецепты</button>
            <div className='container-text-checkbox'>
              <div className='checkbox-text'>Учитывать избранное</div>
              <Checkbox></Checkbox>
            </div>
        </div>
    </div>
  )
}

export default SearchPanel;