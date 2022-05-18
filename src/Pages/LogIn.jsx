import React,{Component} from "react";
import { Link } from "react-router-dom";
import LoginComponent from "../Components/LoginComponents";

export default class Login extends Component {
    constructor(){
        super();
        this.state={
            Email : '',
            Password : ''
        }

        this.Email = this.Email.bind(this);
        this.Password = this.Password.bind(this);
        this.login = this.login.bind(this);
    }

    Email(event){
        this.setState({ Email : event.target.value })
    }

    Password(event){
        this.setState({ Password : event.target.value })
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
        return true
    }

    login(event){
        event.preventDefault();
        if(this.Validator() === false){
            return({})
        }
        fetch(`http://localhost:42403/Authenticate?EmailId=${encodeURIComponent(this.state.Email.toLowerCase())}&Password=${encodeURIComponent(this.state.Password)}`, {
            method: "GET",
            headers: {
                        'Accept': 'text/plain',
                        'Content-Type': 'application/json'
                    },   
        }).then(response => response.json())
            .then(result => {
               if(result.Status==="Success"){
                   localStorage.setItem('Email',this.state.Email.toLowerCase())
                   window.location.href="/selection"
               }
               else{
                   alert(result.Message);
               }
            })

        //console.log(`http://localhost:42403/Authenticate?EmailId=${encodeURIComponent(this.state.Email)}&Password=${encodeURIComponent(this.state.Password)}`)
    }

    render(){
        return(
        <div className="logInPage flex">
             <div className="intro">
                <LoginComponent/>
            </div>
            <form className="logInForm flex">
                <h1>Log In</h1>
                <input type="email" placeholder="Enter Email Id" id="logInFormEmail" onChange={this.Email}></input>
                <input type="password" placeholder="Enter Password" id="logInFormPassword" onChange={this.Password}></input>
                <button type="submit" className="logInSubmit" onClick={this.login}>Submit</button>
                <p>
                    Not a member yet?
                    <Link to="/signUp" className="signupLink">SIGN UP</Link>
                </p>
            </form>
        </div>
        )
    };
};