import React, { useState } from 'react'
import { encode } from 'base-64';
import "../styles/central-panel.css"
import SearchPanel from './SearchPanel';
import ItemRecipe from './ItemRecipe';
import FoundRecipes from './FoundRecipes';

function CentralPanel() {
  const [searchData, setSearchData] = useState({});
  const [foundRecipesData, setFoundRecipesData] = useState({});
  const handleSearch = (data) => {
    console.log(data)
    setSearchData(data);
    //fetch запрос
    const url = 'https://localhost:8080/recipes/filter';
    const requestData = JSON.stringify(data);
    const headers = new Headers();
    headers.append('Authorization', 'Basic ' + encode('mzolot:123'));
    headers.append('Content-Type', 'application/json');
    fetch(url, {
      method: 'GET',
      headers: headers,
      body: requestData
    })
    .then(response => response.json())
    .then(data => {
      const responseData = data;
    })
    .catch(error => {
      console.log("Данные о рецептах, которые искал пользователь, не получнеы", error);
    });
  };
  return (
    <div className='central-panel-container'>
        <div className='search-recipes-text'>Поиск рецептов</div>
        <SearchPanel onSearch={handleSearch}></SearchPanel>
        {/* <ItemRecipe></ItemRecipe> */}
        <FoundRecipes foundRecipesData={foundRecipesData}></FoundRecipes>
    </div>
  )
}

export default CentralPanel;