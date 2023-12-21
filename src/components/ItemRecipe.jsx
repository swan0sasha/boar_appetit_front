import React from 'react'
import RecipeImage from "../assets/dish-picture.png";
import "../styles/item-recipe.css"
import clockImage from '../assets/clock.png'

function ItemRecipe({item}) {
    let imgsrc = ''
    let header = "Сырники с вареной сгущенкой";
    let tags = ['Посытнее'];
    let time = 15
    let ingredients = ["Творог", "Топленый творог", "Пшеничная мука", "Сахар", "Ванилин", "Куриное яйцо", "Соль"]
    let description = "Топленый творог и вареная сгущенка выводят утренние сырники на новую высоту — в таком виде им запросто можно перекочевать из завтраков в десерты. Рецептом с нами поделился шеф-повар ресторана «Матрешка» Влад Пискунов."
    if (item === 1){
        imgsrc = 'https://www.povarenok.ru/data/cache/2014apr/26/17/731652_49842-710x550x.jpg'
        header = "Карамельный сырник с черносливом";
        tags = ['Десерты',  'Торты',  'Творожный торт'];
        time = 70
        ingredients = ["Мука пшеничная", "Масло сливочное", "Сметана", "Какао-порошок", "Сахар", "Разрыхлитель теста", "Творог", "Молоко сгущенное", "Крахмал", "Яйцо куриное", "Чернослив", "Ароматизатор (ром)"]
        description = "Сырник с необыкновенно интересным, карамельным вкусом. Очень простой в приготовлении, необыкновенно вкусный."
    }
    if (item === 2){
        imgsrc = 'https://www.povarenok.ru/data/cache/2017feb/18/49/1918114_94598-710x550x.jpg'
        header = "Морковные сырники с начинкой из чернослива";
        tags = ['Выпечка',  'Блины', 'Оладьи', 'Сырники'];
        time = 30
        ingredients = ["Творог", "Морковь", "Масло сливочное (Милье)", "Крупа манная", "Мука пшеничная / Мука", "Яйцо куриное", "Чернослив", "Изюм", "Сахар"]
        description = "Так приятно начать утро праздничного дня вкуснейшими сырниками! Яркие, аппетитные, полезные и оригинальные - они придутся по душе взрослым и детям!"
    }
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
                <a className='text-name' style={{marginBottom: '8px', color: 'black'}} href={"/recipes/1"}>{header}</a>
                {/* <div className='text-name' style={{marginBottom: '8px'}}>{header}</div> */}
                <span className="description-text">Теги: {tags.join(', ')}</span>
                <div className="image-text-box">
                    <img className="recipe-icon" src={clockImage} alt="clock"/>
                    <label className="description-text">Время приготовления: {time} минут</label>
                </div>
                <p className='description-text'>{description}</p>
            </div>
        </div>
        <span className="description-text" style={{marginTop: '8px'}}>Ингредиенты: {ingredients.join(', ')}</span>
    </div>
  )
}

export default ItemRecipe