import React from "react";
import { Link } from "react-router-dom";
import ToolImg from "../Components/toolImg";

const selection = () => {
    return(
        <div className="selectionPage flex">
            <ToolImg/>
            <div>
                <Link to="/bookRide" className="bookRideBtn">Book a ride</Link>
                <Link to="/offerRide" className="offerRideBtn">Offer a ride</Link>
            </div>
        </div>
    );
};

export default selection;