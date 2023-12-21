import React from 'react'
import '../../styles/recipe/recipe-page-center.css'
import MainDescription from "./MainDescription";
import CookingSteps from "./CookingSteps";
function RecipeCenter() {



    return (
        <div className="center-container">
            <div className="recipe-container">
                <div className="recipe-panel">
                    <div className="recipe-head">
                        <MainDescription/>
                        <div className="recipe-ingredients">

                        </div>
                    </div>
                    <CookingSteps/>
                </div>
            </div>

            <div className="tags-container">
                <div className="tags-panel">

                </div>
            </div>
        </div>
    )
}

export default RecipeCenter