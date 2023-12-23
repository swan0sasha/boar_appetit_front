import React from 'react'
import RecipeImage from "../assets/dish-picture.png";
import "../styles/item-recipe.css"
import clockImage from '../assets/clock.png'

function ItemRecipe({ recipeData }) {
    let imgsrc = 'https://www.povarenok.ru/data/cache/2014apr/26/17/731652_49842-710x550x.jpg'
    // let header = "Сырники с вареной сгущенкой";
    // let tags = ['Посытнее'];
    // let time = 15
    // let ingredients = ["Творог", "Топленый творог", "Пшеничная мука", "Сахар", "Ванилин", "Куриное яйцо", "Соль"]
    // let description = "Топленый творог и вареная сгущенка выводят утренние сырники на новую высоту — в таком виде им запросто можно перекочевать из завтраков в десерты. Рецептом с нами поделился шеф-повар ресторана «Матрешка» Влад Пискунов."
    // if (item === 1){
    //     imgsrc = 'https://www.povarenok.ru/data/cache/2014apr/26/17/731652_49842-710x550x.jpg'
    //     header = "Карамельный сырник с черносливом";
    //     tags = ['Десерты',  'Торты',  'Творожный торт'];
    //     time = 70
    //     ingredients = ["Мука пшеничная", "Масло сливочное", "Сметана", "Какао-порошок", "Сахар", "Разрыхлитель теста", "Творог", "Молоко сгущенное", "Крахмал", "Яйцо куриное", "Чернослив", "Ароматизатор (ром)"]
    //     description = "Сырник с необыкновенно интересным, карамельным вкусом. Очень простой в приготовлении, необыкновенно вкусный."
    // }
    // let header = "Сырники с вареной сгущенкой";
    // let tags = ['Посытнее'];
    // let time = 15
    // let ingredients = ["Творог", "Топленый творог", "Пшеничная мука", "Сахар", "Ванилин", "Куриное яйцо", "Соль"]
    // let description = "Топленый творог и вареная сгущенка выводят утренние сырники на новую высоту — в таком виде им запросто можно перекочевать из завтраков в десерты. Рецептом с нами поделился шеф-повар ресторана «Матрешка» Влад Пискунов."
  return (
    <div className='recipe-container'>
        <div className='img-text-container'>
            <img className="recipe-picture" style={{ width: '300px', height: '200px' }} src={imgsrc} alt="Sirnik"/>
            <div className='description-recipe-container'>
                <a className='text-name' style={{marginBottom: '8px', color: 'black'}} href={"/recipes/1"}>{recipeData.name}</a>
                {/* <div className='text-name' style={{marginBottom: '8px'}}>{header}</div> */}
                <span className="description-text">Теги: {recipeData.tags.map(tag => tag.name).join(', ')}</span>
                <div className="image-text-box">
                    <img className="recipe-icon" src={clockImage} alt="clock"/>
                    <label className="description-text">Время приготовления: {recipeData.time_spent} минут</label>
                </div>
                <p className='description-text'>{description}</p>
            </div>
        </div>
        <span className="description-text" style={{marginTop: '8px'}}>Ингредиенты: {recipeData.ingredients.map(ingredient => ingredient.name).join(', ')}</span>
    </div>
  )
}

export default ItemRecipe