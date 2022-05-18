import React,{Component} from "react";
import HomeComponent from "../Components/HomeComponent";
import ProfileComponent from "../Components/ProfileComponent"

function Activator(id,selectedTime){
    var ele = document.getElementById(id).childNodes
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
const TimeMapper =  {"6am-9am":1,"9am-12pm":2,"12pm-3pm":3,"3pm-6pm":4,"6pm-9pm":5}
const SeatMapper = {"1":1,"2":2,"3":3}
var SeatsAvailable=0;

export default class OfferRide extends Component {
    constructor(){
        super()
        this.state={
            Source:'',
            Destination:'',
            Time:0,
            Date:'',
            Price:0
        }
        this.Source = this.Source.bind(this);
        this.Destination = this.Destination.bind(this);
        this.Date = this.Date.bind(this);
        this.Price = this.Price.bind(this);
    }

    Source(event){
        this.setState({ Source : event.target.value })
    }
    Destination(event){
        this.setState({ Destination : event.target.value })
    }
    Date(event){
        this.setState({ Date : event.target.value })
    }
    Price(event){
        this.setState({ Price : parseInt(event.target.value) })
    }

    ActiveTime = () => {
        var ele = document.getElementById("timeSlots").childNodes
        for(var i=0;i<ele.length;i++){
            if(ele[i].style.color==="white"){
                this.setState({ Time : TimeMapper[ele[i].value] })
            }
        }
    }

    ActiveSeats = () => {
        var ele = document.getElementById("seats").childNodes
        for(var i=0;i<ele.length;i++){
            if(ele[i].style.color==="white"){
                SeatsAvailable = SeatMapper[ele[i].value]
            }
        }
    }

    handleNext = () => {
        this.ActiveTime()
        document.getElementById("newRideDetails").style.display="flex";
    }

    handleSubmit = () => {
        this.ActiveSeats()
        this.PostRide()
    }

    PostRide = () => {
        fetch('http://localhost:42403/api/Ride',
        {
            method:"POST",
            headers:{
                'Accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                source : this.state.Source.toLowerCase(),
                destination : this.state.Destination.toLowerCase(),
                date : this.state.Date,
                time : this.state.Time,
                price : this.state.Price,
                seatsAvailable : SeatsAvailable
            })
        }).then(response => response.json())
        .then(result => {
            if(result.Status === "Success"){
                alert("Ride has been Added")
            }
            else{
                alert(result.Message)
            }
        })
    }

    render(){
        return(
            <div className="book flex">
                <HomeComponent/>
                <ProfileComponent/>
                <div className="newRide">
                    <h1 id="rideTitle">Offer a Ride</h1> 
                    we get you the matches asap!
                    <form>
                        From<br/>
                        <input type="text" id="from" onChange={this.Source}/><br/>
                        To<br/>
                        <input type="text" id="to" onChange={this.Destination}/><br/>
                        Date<br/>
                        <input type="date" id="date" onChange={this.Date}/><br/>
                        Time<br/>
                        <div id="timeSlots">
                            <button type="button" value={"6am-9am"} onClick={() => Activator("timeSlots","6am-9am")}>6am-9am</button>
                            <button type="button" value={"9am-12pm"} onClick={() => Activator("timeSlots","9am-12pm")}>9am-12pm</button>
                            <button type="button" value={"12pm-3pm"} onClick={() => Activator("timeSlots","12pm-3pm")}>12pm-3pm</button>
                            <button type="button" value={"3pm-6pm"} onClick={() => Activator("timeSlots","3pm-6pm")}>3pm-6pm</button>
                            <button type="button" value={"6pm-9pm"} onClick={() => Activator("timeSlots","6pm-9pm")}>6pm-9pm</button>
                        </div>
                        <button type="button" id="cardNext" onClick={this.handleNext}>Next &gt;&gt;</button>
                    </form>
                </div>
                <div className="newRideDetails" id="newRideDetails">
                    <h1 id="rideTitle">Offer a Ride</h1> 
                    we get you the matches asap!
                    <form>
                        <div className="flex">
                            <div>
                                Seats Available<br/>
                                <div id="seats">
                                    <button type="button" value={"1"} onClick={() => Activator("seats","1")}>1</button>
                                    <button type="button" value={"2"} onClick={() => Activator("seats","2")}>2</button>
                                    <button type="button" value={"3"} onClick={() => Activator("seats","3")}>3</button>
                                </div>
                            </div>
                            <div className="priceContainer">
                                Price<br/>
                                <input type="number" id="number" onChange={this.Price}/>
                            </div>
                        </div>
                        <button type="button" id="cardSubmit" onClick={this.handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
            
        );
    }
}