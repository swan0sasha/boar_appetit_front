import React from "react";
import '../../../../styles/recipe/recipe-main-description.css'
import "../../../../styles/stars.css"
import "../../../../styles/fonts.css"

import clockImage from '../../../../assets/clock.png'
import flag from '../../../../assets/flag.png'

import StarRating from "../../../rating/StarRating";


function MainDescription() {
    let header = "Морковные сырники с начинкой из чернослива";
    let recipeImage = "https://www.povarenok.ru/data/cache/2017feb/18/49/1918114_94598-710x550x.jpg";
    let time = 30;
    let description = "Так приятно начать утро праздничного дня вкуснейшими сырниками! Яркие, аппетитные, полезные и оригинальные - они придутся по душе взрослым и детям!"
    let source = "https://www.povarenok.ru/recipes/show/138024/"
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
            <p className="plain-text">
                Источник:
                <a href={source}>povarenok.ru</a>
            </p>
            <p className="handsome-dude">{description}</p>
        </div>
    )
}

export default MainDescription