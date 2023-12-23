import React from "react";
import "../../../../styles/recipe/recipe-ingredints.css"
import IngredientsList from "./IngredientsList";
import RecipeTree from "./RecipeTree";

function RecipeIngredients() {
    let rating = 4.5
    let votes = 147741

    //TODO: onChange for default, scaling
    let default_portions = 3

    return (
        <div className="recipe-ingredients">
            <h1 className="header">Рейтинг: {rating} / 5</h1>
            <p className="plain-text">Оценили {votes} человек</p>
            <div className="ingredients-panel">
                <div className="ingredients-panel-head">
                    <p className="plain-text">Ингредиенты:</p>
                    <div className="portions">
                        <p className="plain-text">Порции:</p>
                        <input className="portions-input plain-text" type="number" name="portions" value={default_portions}/>
                    </div>
                </div>
                <div className="ingredients-panel-body">
                    <IngredientsList/>
                </div>
            </div>
            <div className="ingredients-panel">
                <RecipeTree/>
            </div>
        </div>
    )
}

export default RecipeIngredients