import React, { useState } from "react";
import RideCard from "./RideCard";

function timeSlots(selectedTime){
    var ele = document.getElementById("timeSlots").childNodes
    for(var i=0; i<ele.length; i++){
        if(ele[i].value === selectedTime){
            ele[i].style.color = "white"
            ele[i].style.backgroundColor = "blueViolet"
        }
        else{
            ele[i].style.color = "blueViolet"
            ele[i].style.backgroundColor = "white"
        }
    }
    
}

function Alerter(length){
    console.log(length)
    if(length === 0){
        alert("No Available Rides")
    }
}

const NewRide = () => {
    const source = React.useRef()
    const destination = React.useRef()
    var time = ""
    const date = React.useRef()
    const [rides, SetRides] = useState([])
    const TimeMapper = {1:"6am-9am",2:"9am-12pm",3:"12pm-3pm",4:"3pm-6pm",5:"6pm-9pm"}

    const ActiveTime = () => {
        var ele = document.getElementById("timeSlots").childNodes
        for(var i=0;i<ele.length;i++){
            if(ele[i].style.color==="blueViolet"){
                time=ele[i].value
            }
        }
    }

    const SendData = () => {
        fetch('http://localhost:42403/AvailableRides?source='+source.current.value+'&destination='+destination.current.value)
        .then(response => response.json())
        .then(result => {
            SetRides(result)
        })
    }

    const handleSubmit = () =>{
        ActiveTime()
        SendData()
        console.log(rides)
        Alerter(rides.length)
    }

    return(
        <div className="bookRideContainer flex">
            <div className="newRide">
                <h1 id="rideTitle">Book a Ride</h1> 
                we get you the matches asap!
                <form>
                    From<br/>
                    <input type="text" id="from" ref={source}/><br/>
                    To<br/>
                    <input type="text" id="to" ref={destination}/><br/>
                    Date<br/>
                    <input type="date" id="date" ref={date}/><br/>
                    Time<br/>
                    {/* <input type="time" id="time"/><br/> */}
                    <div id="timeSlots">
                        <button type="button" value={"5am-9am"} onClick={() => timeSlots("5am-9am")}>5am-9am</button>
                        <button type="button" value={"9am-12pm"} onClick={() => timeSlots("9am-12pm")}>9am-12pm</button>
                        <button type="button" value={"12pm-3pm"} onClick={() => timeSlots("12pm-3pm")}>12pm-3pm</button>
                        <button type="button" value={"3pm-6pm"} onClick={() => timeSlots("3pm-6pm")}>3pm-6pm</button>
                        <button type="button" value={"6pm-9pm"} onClick={() => timeSlots("6pm-9pm")}>6pm-9pm</button>
                    </div>
                    <button type="button" id="cardSubmit" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
            <div className="matches flex">
                    {
                        (rides.length > 0) && (
                            <h2>Your Matches</h2>
                        )
                    }
                <div className="offeredRides flex" id="offeredRides">
                    {
                        rides.length > 0 && (
                            <ul className="ridesContainer grid">
                                {rides.map(ride => (
                                    <RideCard ProfileName={"Demo"} Source={ride.Source} Destination={ride.Destination} Date={ride.Date.toString().slice(0,10)} Time={TimeMapper[ride.Time]} Price={ride.Price} SeatsAvailable={ride.SeatsAvailable}/>
                                ))}
                            </ul>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default NewRide;