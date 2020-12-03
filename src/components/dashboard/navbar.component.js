import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


 class Navbar extends Component {
   
    
    render() {
        
        return (
          <div className="">
          <nav className="navbar navbar-expand-lg navbar navbar-dark bg-info navbar fixed-top">
  <a className="navbar-brand" style={{marginLeft:55, fontWeight:'Bold',fontSize:28}}>H R T <a className="navbar-brand" style={{fontSize:15,fontWeight:"normal"}}>CNSS</a></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      
      
    </ul>
    <form className="form-inline my-2 my-lg-0">
      
      <input className="form-control mr-sm-2" type="search" placeholder="Mot clé" aria-label="Search"/>
      <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Chercher</button>
      <ul className="navbar-nav mr-auto">
      
      <li className="nav-item dropdown">
      <Avatar style={{marginLeft:40}} className="bg-dark" icon="user">B</Avatar>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="">Déconnexion</a>
          
        </div>
      </li>
    </ul>
    </form>
  </div>
</nav>
</div>

        /*<Router>
            <div className="">
              <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                  <Link className="navbar-brand" to={"/sign-in"}>
                <img src="/cnssLogo.png" className="logoo" alt=""/>
                </Link>
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link className="nav-link"  to={"/sign-in"}>Username</Link>
                      </li>
                    </ul>
                    
                  </div>
                  
                </div>
              </nav>
              
            </div>
            
            </Router>*/
            
          );
        
    }
}
export default Navbar;

