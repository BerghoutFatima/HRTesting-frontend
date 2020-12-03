import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <div>
                <div className="log" >
                <img src="/cnssLogo.png" className="logo" alt=""/>
                </div>
      
            <div className="form">
               <div className="outer ">
               <div className="inner">
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
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