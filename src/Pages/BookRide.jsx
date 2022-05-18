import React,{Component} from "react";
import NewRide from "../Components/NewRide";
import HomeComponent from "../Components/HomeComponent";
import ProfileComponent from "../Components/ProfileComponent"


export default class BookRide extends Component {
    render(){
        return(
            <div className="offer flex">
                <HomeComponent/>
                <ProfileComponent/>
                <NewRide/>
            </div>
        );
    }
}