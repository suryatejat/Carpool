import React from "react";

const RideCard = (props) => {
    return(
        <div className="rideCard flex">
            <h1>{props.ProfileName}</h1>
            <div className="cardDetails flex">
                <div className="firstPart">
                    From<br/>
                    <label id="from">{props.Source}</label><br/><br/>
                    Date<br/>
                    <label id="date">{props.Date}</label><br/><br/>
                    Price<br/>
                    <label id="price">{props.Price} &#8377; </label><br/>
                </div>
                <div className="secondPart">
                    To<br/>
                    <label id="to">{props.Destination}</label><br/><br/>
                    Time<br/>
                    <label id="time">{props.Time}</label><br/><br/>
                    Seat Availablity<br/>
                    <label id="seats">{props.SeatsAvailable}</label><br/>
                </div>
            </div>
        </div>
    )
}

export default RideCard;