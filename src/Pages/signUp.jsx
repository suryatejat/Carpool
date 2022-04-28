import React from "react";
import { Link } from "react-router-dom";
import LoginComponent from "../Components/loginComponents";

const signUpForm = () => {
    return(
        <div class="signUpPage flex">
             <div className="intro">
                <LoginComponent/>
            </div>
            <div class="signUpForm flex">
                <h1>Sign Up</h1>
                <input type="text" placeholder="Enter Email Id"></input>
                <input type="password" placeholder="Enter Password"></input>
                <input type="password" placeholder="Conform Password"></input>
                <button type="submit" class="signUpSubmit">Submit</button>
                <p>
                    Already a member?
                    <Link to="/" class="loginLink">LOG IN</Link>
                </p>
            </div>
        </div>
    );
};

export default signUpForm;