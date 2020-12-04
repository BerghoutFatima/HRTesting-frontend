import { StyleRounded } from "@material-ui/icons";
import React, { Component } from "react";
import { Backpack } from 'react-kawaii'
export default class Login extends Component {
    
    render() {

        return (
            <div>
                <div className="log" >
                <img src="/cnssLogo.png" className="logo" alt=""/>
                </div>
            <div className="form" style={{marginTop:0}}>
            <div className="outer">
            <div className="inner">
            <form >

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={()=> {window.location.pathname = "/dashboard"}}>
                    Log in
                </button>

                <p className="forgot-password text-left">
                    Forgot <a href="#">password?</a>
                </p>
                <p className="forgot-password text-left">
                    Don't have account yet! <a href="/sign-up">Sign up?</a>
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


