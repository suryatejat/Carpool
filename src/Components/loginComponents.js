import React from "react";
import ToolImg from "./toolImg";

const loginComponent = () => {
    return(
        <div>
            <ToolImg/>
            <div className="header">
                <span>
                    TURN
                    <strong style={{color:"orange"}}> MILES</strong><br/>
                    INTO
                    <strong style={{color:"blueviolet"}}> MONEY</strong>
                </span>
                <h1>Rides on Tap</h1>
            </div>
        </div>
        
    )
}

export default loginComponent;