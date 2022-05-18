import React from "react";
import img from "../Data/user-profile.jpg"

const HomeComponent = () => {

    function ProfileViewer(event){
        var ele = document.getElementById("profileSlides").style.display
        if(ele === "" || ele === "none"){
            document.getElementById("profileSlides").style.display = "flex"
        }
        else{
            document.getElementById("profileSlides").style.display = "none"
        }
    }

    function LogOut(event){
        event.preventDefault()
        localStorage.setItem('Email','NA');
        window.location.href="/"
    }

    return(
        <div className="profile">
            <div className="flex">
                <h3 className="customerName">{localStorage.getItem('Email')}</h3>
                <img src={img} alt="Profile" id="profile" onClick={() => ProfileViewer()}></img>
            </div>
            <div className="profileSlides" id="profileSlides">
                <ul className="profileMenu">
                    <li className="profileMenuItem">Profile</li>
                    <li className="profileMenuItem">My Rides</li>
                    <li className="profileMenuItem" onClick={LogOut}>Logout</li>
                </ul>
            </div>
        </div>
    )
}

export default HomeComponent;