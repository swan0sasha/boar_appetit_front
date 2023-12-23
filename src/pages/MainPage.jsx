import React from "react";
import CentralPanel from "../components/main-page/body/CentralPanel";
import Top from "../components/main-page/head/Top";
import Flags from "../components/recipe/body/flags/Flags";
import "../styles/main-page/main-page.css"

function MainPage() {
    return (
        <div className="page-container">
            <Top/>
            <div className="main-central-container">
                <CentralPanel/>
                <Flags/>
            </div>
        </div>
    )
}

export {MainPage}