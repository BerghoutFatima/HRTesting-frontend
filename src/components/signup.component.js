import React, { Component } from "react";
import UserService from "../services/UserService";
import axios from 'axios'

class SignUp extends Component {

    constructor(props){
        super(props)
        this.state = {
            // users:[]
            email:'',
            password:'',
            username:''
        } 
    } 

    changeHandler = (e)  => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios
        .post('http://localhost:8080/ajouterUser', this.state)
        .then(response => {
            console.log(response)
            window.location.pathname = "/sign-in"
        }) 
        .catch(error => {
            console.log(error)
        })
    }

    /*componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
    }*/

    render() {
        const { email, password, username} = this.state
        return (
            
            <div>
                <div className="log" >
                <img src="/cnssLogo.png" className="logo" alt=""/>
                </div>
      
            <div className="form" style={{marginTop:0}}>
               <div className="outer ">
               <div className="inner">
            <form onSubmit={this.submitHandler} >
                <h3>Register</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control"  placeholder="Username" name = "username" value={username} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control"  placeholder="Enter email" name ="email" value={email} onChange={this.changeHandler} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name ="password" value={password} onChange={this.changeHandler}/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-left">
                    Already registered! <a href="/sign-in">log in?</a>
                </p>
                <h6 className="footer">Copyright @ 2020 CNSS</h6>
            </form>
            </div>
            </div>
            </div>
            </div>
            
        );
    }
}
export default SignUp;