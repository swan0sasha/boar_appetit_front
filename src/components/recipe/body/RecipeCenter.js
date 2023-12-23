import React from 'react'
import '../../../styles/recipe/recipe-page-center.css'

import MainDescription from "./description/MainDescription";
import CookingSteps from "./steps/CookingSteps";
import RecipeIngredients from "./ingredients/RecipeIngredients";
import Flags from "./flags/Flags";

function RecipeCenter() {

    return (
        <div className="center-container">
            <div className="recipe-container">
                <div className="recipe-panel">
                    <div className="recipe-up">
                        <MainDescription/>
                        <RecipeIngredients/>
                    </div>
                    <CookingSteps/>
                </div>
            </div>
            <Flags/>
        </div>
    )
}

export default RecipeCenter