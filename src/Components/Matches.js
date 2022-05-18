import React, { useState } from "react";
import RideCard from "./RideCard";

const Matches = () => {
    const [rides, SetRides] = useState([])
    const TimeMapper = {1:"6am-9am",2:"9am-12pm",3:"12pm-3pm",4:"3pm-6pm",5:"6pm-9pm"}

    function GetRides(){
        fetch("http://localhost:42403/api/Ride")
        .then(response => response.json())
        .then(result => {
            SetRides(result)
        })
    }

    return(
        <div className="matches flex">
            <h2>Your Matches</h2>
            <div className="offeredRides flex" id="offeredRides" onLoad={GetRides()}>
            {rides.length > 0 && (
                <ul className="ridesContainer grid">
                {rides.map(ride => (
                    <RideCard ProfileName={"Demo"} Source={ride.Source} Destination={ride.Destination} Date={ride.Date.toString().slice(0,10)} Time={TimeMapper[ride.Time]} Price={ride.Price} SeatsAvailable={ride.SeatsAvailable}/>
                ))}
                </ul>
            )}
            </div>
        </div>
    )
}

export default Matches;