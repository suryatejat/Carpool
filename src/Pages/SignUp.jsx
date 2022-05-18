import React,{Component} from "react";
import { Link } from "react-router-dom";
import LoginComponent from "../Components/LoginComponents";
import validator from "validator";

export default class SignUp extends Component {
    constructor(){
        super();
        this.state={
            Email:'',
            Password:'',
            ConformPassword:''
        }

        this.Email = this.Email.bind(this);
        this.Password = this.Password.bind(this);
        this.ConformPassword = this.ConformPassword.bind(this);
        this.signup = this.signup.bind(this);
    }

    Email(event){
        this.setState({ Email : event.target.value })
    }

    Password(event){
        this.setState({ Password : event.target.value })
    }

    ConformPassword(event){
        this.setState({ ConformPassword : event.target.value })
    }

    EmailValidation(email){
        if(validator.isEmail(email)){
            return true
        }
        else{
            alert("Invalid Email Address")
            return false
        }
    }

    PasswordValidation(password){
        if(validator.isStrongPassword(password,{minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1})){
            return true;
        }
        else{
            alert("Not a strong Password")
            return false;
        }
    }

    Validator(){
        if(this.state.Email===null || this.state.Email===""){
            alert("Please Enter Email")
            return false
        }
        else if(this.state.Password===null || this.state.Password===""){
            alert("Please Enter Password")
            return false
        }
        else if(this.state.Password !== this.state.ConformPassword){
            alert("Please Re-Enter the Same Password in Conform Password Section")
            return false
        }
        
        return this.EmailValidation(this.state.Email) && this.PasswordValidation(this.state.Password)
    }

    UserValidator = (e) => {
        e.preventDefault()
        fetch('http://localhost:42403/api/Customer',
        {
            method: "POST",
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                EmailId: this.state.Email.toLowerCase(),
                Password: this.state.Password
            })
        }
        ).then((Response) => Response.json())
            .then(result => {
                //console.log(result,this.state.Email,this.state.Password)
                if(result.Status === "Success"){
                    localStorage.setItem('Email',this.state.Email.toLowerCase())
                    window.location.href="/selection"
                }
                else{
                    alert(result.Message)
                }
            })
    }

    signup(event){
        event.preventDefault()
        if(this.Validator() === false){
            return({})
        }
        this.UserValidator(event)
    }

    render(){
        return(
            <div className="signUpPage flex">
                <div className="intro">
                    <LoginComponent/>
                </div>
                <form className="signUpForm flex">
                    <h1>Sign Up</h1>
                    <input type="email" placeholder="Enter Email Id" onChange={this.Email} id="userEmail"></input>
                    <input type="password" placeholder="Enter Password" onChange={this.Password}></input>
                    <input type="password" placeholder="Conform Password" onChange={this.ConformPassword}></input>
                    <button type="submit" className="signUpSubmit" onClick={this.signup}>Submit</button>
                    <p>
                        Already a member?
                        <Link to="/" className="loginLink">LOG IN</Link>
                    </p>
                </form>
            </div>
        );
    }
};