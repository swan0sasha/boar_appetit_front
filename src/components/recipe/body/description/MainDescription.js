import React from "react";
import '../../../../styles/recipe/recipe-main-description.css'
import "../../../../styles/stars.css"
import "../../../../styles/fonts.css"

import RecipeImage from "../../../../assets/dish-picture.png";
import clockImage from '../../../../assets/clock.png'
import flag from '../../../../assets/flag.png'

import StarRating from "../../../rating/StarRating";


function MainDescription() {
    let header = "Сырники с вареной сгущенкой";
    let recipeImage = RecipeImage;
    let time = 15;
    let description = "Топленый творог и вареная сгущенка выводят утренние сырники на новую высоту — в таком виде им запросто можно перекочевать из завтраков в десерты. Рецептом с нами поделился шеф-повар ресторана «Матрешка» Влад Пискунов."

    return (
        <div className="recipe-main-description">
            <h1 className="header">{header}</h1>
            <div className="image-text-box">
                <p className="plain-text">Оценить рецепт:</p>
                <StarRating/>
            </div>
            <img className="recipe-picture" src={recipeImage} alt="Sirnik"/>
            <div className="image-text-box">
                <img className="recipe-icon" src={clockImage} alt="clock"/>
                <label className="plain-text">Время приготовления: {time} минут</label>
            </div>
            <div className="image-text-box">
                <img className="recipe-icon" src={flag} alt="flag"/>
                <label className="plain-text">Добавить в избранное</label>
            </div>
            <p className="handsome-dude">{description}</p>
        </div>
    )
}

export default MainDescription