import React from "react";
import { Link } from "react-router-dom";
import HomeComponent from "../Components/HomeComponent";
import ProfileComponent from "../Components/ProfileComponent"

const Selection = () => {
    return(
        <div className="selectionPage flex">
            <HomeComponent/>
            <ProfileComponent/>
            <div>
                <Link to="/bookRide" className="bookRideBtn">Book a ride</Link>
                <Link to="/offerRide" className="offerRideBtn">Offer a ride</Link>
            </div>
        </div>
    );
};

export default Selection;