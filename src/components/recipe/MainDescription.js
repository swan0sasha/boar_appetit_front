import RecipeImage from "../../assets/dish-picture.png";
import '../../styles/recipe/main-description.css'
import clockImage from '../../assets/clock.png'
import flag from '../../assets/flag.png'
import React from "react";
import StarRating from "../rating/StarRating";
import "../../styles/stars.css"

function MainDescription() {
    let header = "Сырники с вареной сгущенкой";
    let recipeImage = RecipeImage;
    let time = 15;
    let description = "Топленый творог и вареная сгущенка выводят утренние сырники на новую высоту — в таком виде им запросто можно перекочевать из завтраков в десерты. Рецептом с нами поделился шеф-повар ресторана «Матрешка» Влад Пискунов."

    return (
        <div className="recipe-main-description">
            <h1>{header}</h1>
            <div className="image-text-box">
                <StarRating/>
            </div>
            <img className="recipe-picture" src={recipeImage} alt="Sirnik"/>
            <div className="image-text-box">
                <img className="recipe-icon" src={clockImage} alt="clock"/>
                <label>Время приготовления: {time} минут</label>
            </div>
            <div className="image-text-box">
                <img className="recipe-icon" src={flag} alt="flag"/>
                <label>Добавить в избранное</label>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default MainDescription