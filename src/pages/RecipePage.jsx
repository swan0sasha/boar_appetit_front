import React from "react";
import RecipeTop from "../components/recipe/RecipeTop";
import '../styles/page.css'
import RecipeCenter from "../components/recipe/RecipeCenter";

const RecipePage = () => {
    return (
        <div className="page-container">
            <RecipeTop/>
            <RecipeCenter/>
        </div>
    )
}

export {RecipePage}