import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

 class Navbar extends Component {
    
    render() {
        
        return (<Router>
            <div className="">
              <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                  <Link className="navbar-brand" to={"/sign-in"}>CNSS-HRT</Link>
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to={"/sign-in"}>Username</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              
            </div>
            </Router>
            
          );
        
    }
}
export default Navbar;

