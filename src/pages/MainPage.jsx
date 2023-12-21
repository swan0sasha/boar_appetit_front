import React from "react";
import CentralPanel from "../components/CentralPanel";
import Top from "../components/Top";
import Flags from "../components/recipe/body/flags/Flags";
import "../styles/main-page.css"

function MainPage() {
    return (
        <div>
            <Top/>
            <div className="central-flags-container">
                <CentralPanel/>
                <div className="flags-container">
                    <div className="flags-panel">
                    <Flags/>
                    </div>
                </div>
            </div>
            </div>
    )
}
export {MainPage}