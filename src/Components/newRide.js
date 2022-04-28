import React from "react";

const newRide = () => {
    return(
        <div className="rideCard">
            <h1>Book a Ride</h1> 
            we get you the matches asap!
            <form>
                From<br/>
                <input type="text" id="from"/><br/>
                To<br/>
                <input type="text" id="to"/><br/>
                Date<br/>
                <input type="date" id="date"/><br/>
                Time<br/>
                <input type="time" id="time"/><br/>
                <button type="submit" id="cardSubmit">Submit</button>
            </form>
        </div>
    )
}

export default newRide;