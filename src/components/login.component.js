import React, { Component } from "react";
import 'react-notifications-component/dist/theme.css'
import axios from 'axios'

export default class Login extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    } 

    changeHandler = e  => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log("eeee")
        console.log(this.state.email)
        console.log("aaaa")
        axios.get('http://localhost:8080/trouverUserParLogin?email='+this.state.email+'&password='+this.state.password)
        .then(response => {
            console.log(response.data[0].username)
            if(response.data.length === 1 && this.state.email === "fatima@gmail.com" && this.state.password === "aaaaaa" && response.data[0].email === this.state.email && response.data[0].password === this.state.password )
            {
                window.location.pathname = "/dashboard/"+response.data[0].username
            }
            else window.location.pathname = "/dashboardcollab/"+response.data[0].username

            
        })
        .catch(error => {
            console.log(error)
        })
        
    }

    
    render() {
        const { id, email, password} = this.state

        return (

            <div>
                <div className="log" >
                <img src="/cnssLogo.png" className="logo" alt=""/>
                </div>
            <div className="form" style={{marginTop:0}}>
            <div className="outer">
            <div className="inner">

            <form onSubmit={this.submitHandler} >
                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name ="email" value={email} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name ="password" value={password} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div>
            <button type="submit" className="btn btn-dark btn-lg btn-block" 
            //onClick={()=>{window.location.pathname = "/dashboard" }}
            >
                Log in
            </button>
            </div>


                

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


/*


*/
